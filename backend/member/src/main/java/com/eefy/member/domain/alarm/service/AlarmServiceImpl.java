package com.eefy.member.domain.alarm.service;

import com.eefy.member.domain.alarm.dto.request.AlarmSendRequest;
import com.eefy.member.domain.alarm.dto.request.PersonalAlarmSendRequest;
import com.eefy.member.domain.alarm.dto.request.SubscribeClassTopicRequest;
import com.eefy.member.domain.alarm.dto.response.SavedMessageResponse;
import com.eefy.member.domain.alarm.dto.response.SubscribeClassTopicResponse;
import com.eefy.member.domain.alarm.exception.validator.AlarmValidator;
import com.eefy.member.domain.alarm.persistence.AlarmRepository;
import com.eefy.member.domain.alarm.persistence.ClassSubscriptionRepository;
import com.eefy.member.domain.alarm.persistence.entity.Alarm;
import com.eefy.member.domain.alarm.persistence.AlarmMessageRedisRepository;
import com.eefy.member.domain.alarm.persistence.entity.ClassSubscription;
import com.eefy.member.domain.alarm.persistence.entity.redis.AlarmMessage;
import com.eefy.member.domain.alarm.persistence.entity.redis.SavedMessage;
import com.eefy.member.domain.member.exception.validator.MemberValidator;
import com.eefy.member.domain.member.persistence.MemberRepository;
import com.eefy.member.domain.member.persistence.entity.Member;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.TopicManagementResponse;
import com.google.firebase.messaging.WebpushConfig;
import com.google.firebase.messaging.WebpushFcmOptions;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class AlarmServiceImpl implements AlarmService {
    private final FirebaseMessaging firebaseMessaging;
    private final MemberValidator memberValidator;

    private final MemberRepository memberRepository;
    private final AlarmRepository alarmRepository;
    private final ClassSubscriptionRepository subscriptionRepository;
    private final AlarmMessageRedisRepository messageRedisRepository;

    @Override
    public String sendMessageToPersonal(int memberId, PersonalAlarmSendRequest request) {
        Member member = memberValidator.getValidMember(memberRepository.findById(request.getTargetMemberId()));
        log.info("클래스 아이디: {}, token: {}", request.getClassId(), member.getToken());

        Message message = makePersonalMessage(request, member.getToken());
        SavedMessage savedMessage = new ModelMapper().map(request, SavedMessage.class);
        savedMessage.setCreatedAt(LocalDateTime.now());
        String messageId = sendMessage(message);
        saveAlarmMessage(request.getTargetMemberId(), savedMessage, messageId);
        return messageId;
    }

    @Override
    public String sendMessageToGroup(int memberId, AlarmSendRequest alarmSendRequest) {
        int classId = alarmSendRequest.getClassId();
        String topic = AlarmValidator.getValidAlarm(alarmRepository.findByClassId(classId)).getTopic();
        log.info("클래스 아이디: {}, topic: {}", classId, topic);

        Message message = makeGroupMessage(alarmSendRequest, topic);
        SavedMessage savedMessage = new ModelMapper().map(alarmSendRequest, SavedMessage.class);
        savedMessage.setCreatedAt(LocalDateTime.now());
        String messageId = sendMessage(message);
        saveAlarmMessage(savedMessage, classId, messageId);
        return messageId;
    }

    @Override
    @Transactional
    public String createClassTopic(int classId) {
        String topic = makeClassTopic(classId);
        alarmRepository.save(new Alarm(classId, topic));
        return topic;
    }

    @Override
    @Transactional
    public SubscribeClassTopicResponse subscribeClassTopic(int classId, SubscribeClassTopicRequest request) {
        List<Member> members = memberRepository.findAllById(request.getStudentIds());
        AlarmValidator.checkValidMemberCount(request.getStudentIds().size(), members.size());

        Alarm alarm = AlarmValidator.getValidAlarm(alarmRepository.findByClassId(classId));
        List<String> tokens = getStudentTokens(request.getStudentIds());

        sendSubscribe(tokens, alarm.getTopic());
        subscriptionRepository.saveAll(makeClassSubscription(members, alarm));
        return new SubscribeClassTopicResponse(alarm.getTopic());
    }

    @Override
    @Transactional
    public String unsubscribeClassTopic(int classId) {
        Alarm alarm = AlarmValidator.getValidAlarm(alarmRepository.findByClassId(classId));
        List<String> registrationTokens = getRegistrationTokensOfClass(alarm);
        try {
            firebaseMessaging.unsubscribeFromTopic(registrationTokens, alarm.getTopic());
        } catch (FirebaseMessagingException e) {
            AlarmValidator.throwFirebaseMessagingError(e);
        }
        subscriptionRepository.deleteAllByAlarm(alarm);
        alarmRepository.deleteById(alarm.getId());
        return "SUCCESS";
    }

    private List<String> getRegistrationTokensOfClass(Alarm alarm) {
        return subscriptionRepository.findByAlarmWithMember(alarm)
                .stream()
                .map(c -> c.getMember().getToken())
                .collect(Collectors.toList());
    }

    @Override
    public List<SavedMessageResponse> getAlarmMessages(int memberId) {
        Optional<AlarmMessage> alarmMessageOptional = messageRedisRepository.findById(memberId);
        if (alarmMessageOptional.isEmpty()
                || alarmMessageOptional.get().getMessages() == null) return new ArrayList<>();
        Map<String, SavedMessage> messages = alarmMessageOptional.get().getMessages();
        log.info("요청받은 알림 메세지 목록 수: " + messages.size());
        return makeSavedMessageListResponse(messages);
    }

    @Override
    @Transactional
    public List<SavedMessageResponse> readAlarmMessage(int memberId, String messageId) {
        Optional<AlarmMessage> alarmMessageOptional = messageRedisRepository.findById(memberId);
        AlarmMessage alarmMessage = AlarmValidator.getValidAlarmMessage(alarmMessageOptional, messageId);
        alarmMessage.getMessages().remove(messageId);
        messageRedisRepository.save(alarmMessage);
        return makeSavedMessageListResponse(alarmMessage.getMessages());
    }

    private void saveAlarmMessage(SavedMessage savedMessage, int classId, String messageId) {
        Alarm alarm = AlarmValidator.getValidAlarm(alarmRepository.findByClassId(classId));
        List<Integer> subscriberIds = getSubscriberIds(alarm);
        subscriberIds.forEach(memberId -> saveAlarmMessage(memberId, savedMessage, messageId));
    }

    private List<Integer> getSubscriberIds(Alarm alarm) {
        return subscriptionRepository.findByAlarmWithMember(alarm)
                .stream()
                .map(c -> c.getMember().getId())
                .collect(Collectors.toList());
    }

    private void saveAlarmMessage(int memberId, SavedMessage savedMessage, String messageId) {
        Optional<AlarmMessage> alarmMessageOptional = messageRedisRepository.findById(memberId);
        AlarmMessage alarmMessage = getValidAlarmMessage(alarmMessageOptional, memberId);
        alarmMessage.getMessages().put(messageId, savedMessage);
        messageRedisRepository.save(alarmMessage);
        log.info("Successfully saved Message {} for memberId {}", savedMessage.toString(), memberId);
    }

    private AlarmMessage getValidAlarmMessage(Optional<AlarmMessage> alarmMessageOptional, int memberId) {
        AlarmMessage alarmMessage = alarmMessageOptional.orElseGet(() -> new AlarmMessage(memberId, new HashMap<>()));
        if (alarmMessage.getMessages() == null) {
            alarmMessage.setMessages(new HashMap<>());
        }
        return alarmMessage;
    }

    private List<ClassSubscription> makeClassSubscription(List<Member> members, Alarm alarm) {
        List<ClassSubscription> subscriptions = new ArrayList<>();
        members.forEach(m -> subscriptions.add(new ClassSubscription(m, alarm)));
        return subscriptions;
    }

    private Message makePersonalMessage(PersonalAlarmSendRequest request, String token) {
        return Message.builder()
                .setWebpushConfig(WebpushConfig.builder()
                        .setFcmOptions(WebpushFcmOptions.builder()
                                .setLink(request.getLink())
                                .build())
                        .build())
                .putData("className", request.getClassName())
                .putData("title", request.getTitle())
                .putData("content", request.getContent())
                .setToken(token)
                .build();
    }

    private Message makeGroupMessage(AlarmSendRequest alarmSendRequest, String topic) {
        return Message.builder()
                .setWebpushConfig(WebpushConfig.builder()
                        .setFcmOptions(WebpushFcmOptions.builder()
                                .setLink(alarmSendRequest.getLink())
                                .build())
                        .build())
                .putData("className", alarmSendRequest.getClassName())
                .putData("title", alarmSendRequest.getTitle())
                .putData("content", alarmSendRequest.getContent())
                .setTopic(topic)
                .build();
    }

    private String sendMessage(Message message) {
        try {
            String response = firebaseMessaging.send(message);
            log.info("Successfully sent message: {}", response);
            return response;
        } catch (FirebaseMessagingException e) {
            throw new RuntimeException("알림 전송 실패: " + e);
        }
    }

    private List<String> getStudentTokens(List<Integer> studentIds) {
        log.info("받은 아이디: " + studentIds.toString());
        List<String> tokens = memberRepository.findAllById(studentIds).stream()
                .map(Member::getToken)
                .collect(Collectors.toList());
        log.info("조회된 토큰: " + tokens);
        return tokens;
    }

    private String makeClassTopic(int classId) {
        return "/topics/" + UUID.randomUUID() + "-" + classId;
    }

    private void sendSubscribe(List<String> registrationTokens, String topic) {
        try {
            log.info("등록할 토큰: {}, 토픽: {}", registrationTokens, topic);
            TopicManagementResponse response = firebaseMessaging.subscribeToTopic(registrationTokens, topic);
            response.getErrors().forEach(e -> log.info(e.getIndex() + " " + e.getReason()));
            AlarmValidator.validateSendingSubscribe(response);
        } catch (FirebaseMessagingException e) {
            AlarmValidator.throwFirebaseMessagingError(e);
        }
    }

    private List<SavedMessageResponse> makeSavedMessageListResponse(Map<String, SavedMessage> messages) {
        List<SavedMessageResponse> response = new ArrayList<>();
        for (String messageId : messages.keySet()) {
            SavedMessage savedMessage = messages.get(messageId);
            response.add(SavedMessageResponse.builder()
                    .messageId(messageId)
                    .classId(savedMessage.getClassId())
                    .className(savedMessage.getClassName())
                    .title(savedMessage.getTitle())
                    .content(savedMessage.getContent())
                    .link(savedMessage.getLink())
                    .createdAt(savedMessage.getCreatedAt())
                    .build());
        }
        log.info("알림 응답 목록 수: {}", response.size());
        Collections.sort(response);
        return response;
    }
}
