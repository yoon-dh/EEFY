package com.eefy.member.domain.alarm.service;

import com.eefy.member.domain.alarm.dto.FcmMessage;
import com.eefy.member.domain.alarm.dto.request.SubscribeClassTopicRequest;
import com.eefy.member.domain.alarm.dto.response.SubscribeClassTopicResponse;
import com.eefy.member.domain.alarm.exception.validator.AlarmValidator;
import com.eefy.member.domain.alarm.persistence.AlarmRepository;
import com.eefy.member.domain.alarm.persistence.entity.Alarm;
import com.eefy.member.domain.alarm.util.FcmUtil;
import com.eefy.member.domain.member.persistence.MemberRepository;
import com.eefy.member.domain.member.persistence.entity.Member;
import com.eefy.member.global.feign.FirebaseClient;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.TopicManagementResponse;
import feign.FeignException;
import feign.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class AlarmServiceImpl implements AlarmService {
    private final FirebaseClient firebaseClient;
    private final MemberRepository memberRepository;
    private final AlarmRepository alarmRepository;

    @Override
    public String sendMessageTo(int memberId, int classId, String title, String body) {
        String topic = alarmRepository.findByClassId(classId).get().getTopic();
        log.info("클래스 아이디: {}, topic: {}", classId, topic);

        Message message = Message.builder()
                .putData("title", title)
                .putData("content", body)
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
        }
        else topic = alarmOptional.get().getTopic();
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
        return UUID.randomUUID() + "-" + classId;
    }

    private void sendSubscribe(List<String> registrationTokens, String topic) {
        TopicManagementResponse response = null;
        try {
            response = FirebaseMessaging.getInstance().subscribeToTopic(registrationTokens, topic);
        } catch (FirebaseMessagingException e) {
            AlarmValidator.throwFirebaseMessagingError(e);
        }
        log.info(response.getSuccessCount() + "개의 토큰 구독 성공");
    }
}
