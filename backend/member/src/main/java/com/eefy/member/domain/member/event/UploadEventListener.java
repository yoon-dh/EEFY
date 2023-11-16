package com.eefy.member.domain.member.event;

import com.eefy.member.domain.member.service.AwsS3Service;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Slf4j
@Component
@RequiredArgsConstructor
public class UploadEventListener {
    private final AwsS3Service awsS3Service;

    @EventListener
    public void sendPush(UploadProfileImageEvent event) throws IOException {
        awsS3Service.uploadImage(event.getMember(), event.getProfileImage());
        log.info(
                String.format("프로필 사진 업로드 [파일명 : %s][유저아이디 : %d]",
                        event.getProfileImage().getOriginalFilename(),
                        event.getMember().getId())
        );
    }
}
