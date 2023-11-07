package com.eefy.member.domain.alarm.util;

import com.eefy.member.domain.alarm.dto.FcmMessage;
import com.google.auth.oauth2.GoogleCredentials;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.util.List;

public class FcmUtil {
    public static FcmMessage makeMessage(String targetToken, String title, String body) {
        return FcmMessage.builder()
                .message(FcmMessage.Message.builder()
                        .token(targetToken)
                        .notification(FcmMessage.Notification.builder()
                                .title(title)
                                .body(body)
                                .image(null)
                                .build()
                        )
                        .build()
                )
                .validate_only(false)
                .build();
    }

    public static String getAccessToken() throws IOException {
        String firebaseConfigPath = "/firebase/eefy-f2294-e449641a95b8.json";

        GoogleCredentials googleCredentials = GoogleCredentials
                .fromStream(new ClassPathResource(firebaseConfigPath).getInputStream())
                .createScoped(List.of("https://www.googleapis.com/auth/cloud-platform"));

        googleCredentials.refreshIfExpired();
        return googleCredentials.getAccessToken().getTokenValue();
    }
}
