package com.eefy.member.domain.member.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface AwsS3Service {
    String uploadImage(MultipartFile multipartFile) throws IOException;
}
