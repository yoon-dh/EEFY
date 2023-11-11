package com.eefy.member.global.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.messaging.FirebaseMessaging;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.InputStream;

@Configuration
public class FirebaseConfig {

    @Value("${firebase.sdk.path}")
    private String firebaseSdkPath;

    @Bean
    public FirebaseMessaging initFirebaseMessaging() throws IOException {
        InputStream file = FirebaseConfig.class.getClassLoader().getResourceAsStream(firebaseSdkPath);

        FirebaseOptions options = FirebaseOptions.builder()
                .setCredentials(GoogleCredentials.fromStream(file))
                .build();
        file.close();
        return FirebaseMessaging.getInstance(FirebaseApp.initializeApp(options));
    }
}
