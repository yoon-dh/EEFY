package com.eefy.member.domain.alarm.exception.validator;

import com.eefy.member.domain.alarm.exception.message.AlarmErrorEnum;
import com.eefy.member.domain.alarm.persistence.entity.Alarm;
import com.eefy.member.domain.alarm.persistence.entity.redis.AlarmMessage;
import com.eefy.member.global.exception.CustomException;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.TopicManagementResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;

import java.util.Optional;

@Slf4j
public class AlarmValidator {

    public static Alarm getValidAlarm(Optional<Alarm> alarm) {
        if (alarm.isEmpty()) {
            throw CustomException.builder()
                    .status(HttpStatus.BAD_REQUEST)
                    .code(AlarmErrorEnum.ALARM_NOT_EXIST.getCode())
                    .message(AlarmErrorEnum.ALARM_NOT_EXIST.getMessage())
                    .build();
        }
        return alarm.get();
    }

    public static void checkValidMemberCount(int sourceCount, int targetCount) {
        if (sourceCount != targetCount) {
            throw CustomException.builder()
                    .status(HttpStatus.BAD_REQUEST)
                    .code(AlarmErrorEnum.NOT_MATCH_MEMBER_COUNT.getCode())
                    .message(AlarmErrorEnum.NOT_MATCH_MEMBER_COUNT.getMessage())
                    .build();
        }
    }

    public static void throwFirebaseMessagingError(FirebaseMessagingException e) {
        throw CustomException.builder()
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .code(AlarmErrorEnum.FAILED_SEND_MESSAGE_WITH_SERVER.getCode())
                .message(AlarmErrorEnum.FAILED_SEND_MESSAGE_WITH_SERVER.getMessage() + e)
                .build();
    }

    public static AlarmMessage getValidAlarmMessage(Optional<AlarmMessage> alarmMessageOptional, String messageId) {
        if (alarmMessageOptional.isEmpty() || !checkValidAlarmMessage(alarmMessageOptional.get(), messageId)) {
            throw CustomException.builder()
                    .status(HttpStatus.BAD_REQUEST)
                    .code(AlarmErrorEnum.EMPTY_SAVED_MESSAGE.getCode())
                    .message(AlarmErrorEnum.EMPTY_SAVED_MESSAGE.getMessage())
                    .build();
        }
        return alarmMessageOptional.get();
    }

    public static void validateSendingSubscribe(TopicManagementResponse response) {
        log.info("{}개의 토큰 구독 성공, {}개의 토큰 구독 실패", response.getSuccessCount(), response.getFailureCount());
        log.info("발생한 에러 수: {}", response.getErrors().size());
        response.getErrors().forEach(e -> log.error("토픽 구독 에러: {}", e.getReason()));
        if (response.getErrors().size() >= 1 || response.getFailureCount() >= 1) {
            throw CustomException.builder()
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .code(AlarmErrorEnum.FAILED_SUBSCRIBE_TOPIC.getCode())
                    .message(AlarmErrorEnum.FAILED_SUBSCRIBE_TOPIC.getMessage())
                    .build();
        }
    }

    private static boolean checkValidAlarmMessage(AlarmMessage alarmMessage, String messageId) {
        return alarmMessage.getMessages() != null
                && !alarmMessage.getMessages().isEmpty()
                && alarmMessage.getMessages().get(messageId) != null;
    }
}
