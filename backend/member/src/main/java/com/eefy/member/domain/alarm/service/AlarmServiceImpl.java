package com.eefy.member.domain.alarm.service;

import com.eefy.member.domain.alarm.dto.request.AlarmSendRequest;
import com.eefy.member.domain.alarm.dto.request.PersonalAlarmSendRequest;
import com.eefy.member.domain.alarm.dto.request.SubscribeClassTopicRequest;
import com.eefy.member.domain.alarm.dto.response.SubscribeClassTopicResponse;
import com.eefy.member.domain.alarm.exception.validator.AlarmValidator;
import com.eefy.member.domain.alarm.persistence.AlarmRepository;
import com.eefy.member.domain.alarm.persistence.entity.Alarm;
import com.eefy.member.domain.member.exception.validator.MemberValidator;
import com.eefy.member.domain.member.persistence.MemberRepository;
import com.eefy.member.domain.member.persistence.entity.Member;
import com.google.firebase.FirebaseApp;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.TopicManagementResponse;
import com.google.firebase.messaging.WebpushConfig;
import com.google.firebase.messaging.WebpushFcmOptions;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class AlarmServiceImpl implements AlarmService {
    private final FirebaseApp firebaseApp;
    private final MemberValidator memberValidator;
    private final MemberRepository memberRepository;
    private final AlarmRepository alarmRepository;

    @Override
    public String sendMessageToPersonal(int memberId, PersonalAlarmSendRequest request) {
        int classId = request.getClassId();
        Member member = memberValidator.getValidMember(memberRepository.findById(request.getTargetMemberId()));
        String token = member.getToken();
        log.info("클래스 아이디: {}, token: {}", classId, token);

        Message message = Message.builder()
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

        String response = null;
        try {
            response = FirebaseMessaging.getInstance().send(message);
        } catch (FirebaseMessagingException e) {
            throw new RuntimeException("알림 전송 실패: " + e);
        }

        System.out.println("Successfully sent message: " + response);
        return null;
    }

    @Override
    public String sendMessageToGroup(int memberId, AlarmSendRequest alarmSendRequest) {
        int classId = alarmSendRequest.getClassId();
        String topic = alarmRepository.findByClassId(classId).get().getTopic();
        log.info("클래스 아이디: {}, topic: {}", classId, topic);

        Message message = Message.builder()
                .setWebpushConfig(WebpushConfig.builder()
                        .setFcmOptions(WebpushFcmOptions.builder()
                                .setLink("https://k9b306.p.ssafy.io/api/member/swagger-ui/index.html")
                                .build())
                        .build())
                .putData("className", alarmSendRequest.getClassName())
                .putData("title", alarmSendRequest.getTitle())
                .putData("content", alarmSendRequest.getContent())
                .setTopic(topic)
                .build();

        String response = null;
        try {
            response = FirebaseMessaging.getInstance().send(message);
        } catch (FirebaseMessagingException e) {
            throw new RuntimeException("알림 전송 실패: " + e);
        }

        System.out.println("Successfully sent message: " + response);
        return response;
    }

    @Override
    @Transactional
    public SubscribeClassTopicResponse subscribeClassTopic(int classId, SubscribeClassTopicRequest request) {
        Optional<Alarm> alarmOptional = alarmRepository.findByClassId(classId);
        String topic;
        if (alarmOptional.isEmpty()) {
            topic = makeClassTopic(classId);
            alarmRepository.save(new Alarm(classId, topic));
        } else topic = alarmOptional.get().getTopic();
        List<String> tokens = getStudentTokens(request.getStudentIds());
        sendSubscribe(tokens, topic);
        log.info("Successfully subscribe topic: 구독 성공 - {}", topic);
        return new SubscribeClassTopicResponse(topic);
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
        TopicManagementResponse response = null;
        try {
            log.info("등록할 토큰: {}, 토픽: {}", registrationTokens, topic);
            response = FirebaseMessaging.getInstance(firebaseApp).subscribeToTopic(registrationTokens, topic);
        } catch (FirebaseMessagingException e) {
            AlarmValidator.throwFirebaseMessagingError(e);
            throw new IllegalArgumentException("토큰 구독 실패: " + e);
        }
        log.info("{}개의 토큰 구독 성공, {}개의 토큰 구독 실패", response.getSuccessCount(), response.getFailureCount());
        log.info("발생한 에러 수: {}", response.getErrors().size());
        response.getErrors().forEach(e -> log.info(e.getIndex() + " " + e.getReason()));
    }
}
