package com.eefy.member.domain.alarm.exception.validator;

import com.eefy.member.domain.alarm.exception.message.AlarmErrorEnum;
import com.eefy.member.global.exception.CustomException;
import com.google.firebase.messaging.FirebaseMessagingException;
import feign.FeignException;
import org.springframework.http.HttpStatus;

import java.io.IOException;

public class AlarmValidator {

    public static void throwSendMessageClientError(FeignException e) {
        throw CustomException.builder()
                .status(HttpStatus.BAD_REQUEST)
                .code(AlarmErrorEnum.FAILED_SEND_MESSAGE_WITH_CLIENT.getCode())
                .message(AlarmErrorEnum.FAILED_SEND_MESSAGE_WITH_CLIENT.getMessage() + e)
                .build();
    }

    public static void throwFirebaseMessagingError(FirebaseMessagingException e) {
        throw CustomException.builder()
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .code(AlarmErrorEnum.FAILED_SEND_MESSAGE_WITH_CLIENT.getCode())
                .message(AlarmErrorEnum.FAILED_SEND_MESSAGE_WITH_SERVER.getMessage() + e)
                .build();
    }

    public static void throwSendMessageServerError(IOException e) {
        throw CustomException.builder()
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .code(AlarmErrorEnum.FAILED_SEND_MESSAGE_WITH_SERVER.getCode())
                .message(AlarmErrorEnum.FAILED_SEND_MESSAGE_WITH_SERVER.getMessage() + e)
                .build();
    }
}
