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
import com.google.firebase.messaging.TopicManagementResponse;
import feign.FeignException;
import feign.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

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
    public void sendMessageTo(String targetToken, String title, String body) {
        FcmMessage fcmMessage = FcmUtil.makeMessage(targetToken, title, body);
        try {
            String accessToken = "Bearer " + FcmUtil.getAccessToken();
            Response response = firebaseClient.sendMessageTo(accessToken, fcmMessage);
            log.info(response.body().toString());
        } catch (FeignException e) {
            AlarmValidator.throwSendMessageClientError(e);
        } catch (IOException e) {
            AlarmValidator.throwSendMessageServerError(e);

        }
    }

    @Override
    public SubscribeClassTopicResponse subscribeClassTopic(int classId, SubscribeClassTopicRequest request) {
        Optional<Alarm> alarmOptional = alarmRepository.findByClassId(classId);
        String topic;
        if (alarmOptional.isEmpty()) topic = makeClassTopic(classId);
        else topic = alarmOptional.get().getTopic();
        List<String> tokens = getStudentTokens(request.getStudentIds());
        sendSubscribe(tokens, topic);
        return null;
    }

    private List<String> getStudentTokens(List<Integer> studentIds) {
        return memberRepository.findAllById(studentIds).stream()
                .map(Member::getToken)
                .collect(Collectors.toList());
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
