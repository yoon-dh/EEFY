package com.eefy.member.domain.alarm.service;

import com.eefy.member.domain.alarm.dto.FcmMessage;
import com.eefy.member.domain.alarm.exception.message.AlarmErrorEnum;
import com.eefy.member.domain.alarm.util.FcmUtil;
import com.eefy.member.global.exception.CustomException;
import com.eefy.member.global.feign.FirebaseClient;
import feign.FeignException;
import feign.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Slf4j
@Service
@RequiredArgsConstructor
public class AlarmServiceImpl implements AlarmService {
    private final FirebaseClient firebaseClient;

    @Override
    public void sendMessageTo(String targetToken, String title, String body) {
        FcmMessage fcmMessage = FcmUtil.makeMessage(targetToken, title, body);
        try {
            String accessToken = "Bearer " + FcmUtil.getAccessToken();
            Response response = firebaseClient.sendMessageTo(accessToken, fcmMessage);
            log.info(response.body().toString());
        } catch (FeignException e) {
            log.error(e.getMessage());
            throw CustomException.builder()
                    .status(HttpStatus.BAD_REQUEST)
                    .code(AlarmErrorEnum.FAILED_SEND_MESSAGE_WITH_CLIENT.getCode())
                    .message(AlarmErrorEnum.FAILED_SEND_MESSAGE_WITH_CLIENT.getMessage())
                    .build();
        } catch (IOException e) {
            throw CustomException.builder()
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .code(AlarmErrorEnum.FAILED_SEND_MESSAGE_WITH_SERVER.getCode())
                    .message(AlarmErrorEnum.FAILED_SEND_MESSAGE_WITH_SERVER.getMessage())
                    .build();
        }
    }
}
