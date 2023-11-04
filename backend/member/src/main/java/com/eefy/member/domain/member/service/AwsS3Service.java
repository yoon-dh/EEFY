package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.persistence.entity.Member;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface AwsS3Service {
    void uploadImage(Member member, MultipartFile multipartFile) throws IOException;
}
