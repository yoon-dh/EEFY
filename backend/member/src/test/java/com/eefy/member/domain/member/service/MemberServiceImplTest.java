package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.dto.request.JoinRequest;
import com.eefy.member.domain.member.persistence.EmailConfirmRedisRepository;
import com.eefy.member.domain.member.persistence.entity.enums.MemberRole;
import com.eefy.member.domain.member.persistence.entity.redis.EmailConfirm;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@Transactional
@SpringBootTest
class MemberServiceImplTest {
    @Autowired
    private MemberService memberService;
    @Autowired
    private EmailConfirmRedisRepository emailConfirmRedisRepository;

    @Test
    void join() {
//        emailConfirmRedisRepository.save(new EmailConfirm("test@test.com", true));
//
//        JoinRequest joinRequest = JoinRequest.builder()
//                .email("test@test.com")
//                .password("1234^a")
//                .checkedPassword("1234^a")
//                .name("test")
//                .nickname("test")
//                .phoneNumber("010-1234-1234")
//                .role(MemberRole.STUDENT)
//                .build();
//        memberService.join(joinRequest);
    }

    @Test
    void login() {
    }

    @Test
    void logout() {
    }
}