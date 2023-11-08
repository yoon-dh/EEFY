package com.eefy.member.global.feign;

import com.eefy.member.domain.alarm.dto.FcmMessage;
import feign.Headers;
import feign.Response;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.Optional;

@FeignClient(name = "firebaseClient", url = "https://fcm.googleapis.com/v1/projects/eefy-f2294/messages:send")
public interface FirebaseClient {

    @PostMapping
    @Headers("Content-Type: application/json; UTF-8")
    Optional<Response> sendMessageTo(
            @RequestHeader("Authorization") String accessToken, @RequestBody FcmMessage fcmMessage);
}
