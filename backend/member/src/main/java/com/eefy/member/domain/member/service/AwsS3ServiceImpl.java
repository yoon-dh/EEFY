package com.eefy.member.domain.member.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.eefy.member.domain.member.persistence.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AwsS3ServiceImpl implements AwsS3Service {
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;
    @Value("${cloud.aws.s3.dir}")
    private String dir;

    private final AmazonS3 amazonS3;

    @Override
    public void uploadImage(Member member, MultipartFile profileImage) throws IOException {
        String s3FileName = UUID.randomUUID() + "-" + profileImage.getOriginalFilename();

        ObjectMetadata objMeta = new ObjectMetadata();
        objMeta.setContentLength(profileImage.getInputStream().available());

        amazonS3.putObject(bucket, dir + "/" + s3FileName, profileImage.getInputStream(), objMeta);

        member.updateProfileImageUrl(amazonS3.getUrl(bucket, s3FileName).toString());
    }
}
