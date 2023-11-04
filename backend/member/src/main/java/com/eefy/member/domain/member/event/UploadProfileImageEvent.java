package com.eefy.member.domain.member.event;

import com.eefy.member.domain.member.persistence.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@AllArgsConstructor
public class UploadProfileImageEvent {
    private Member member;
    private MultipartFile profileImage;
}
