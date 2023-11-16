package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.dto.request.JoinRequest;
import com.eefy.member.domain.member.dto.response.MemberResponse;
import com.eefy.member.domain.member.dto.response.StudentResponse;
import com.eefy.member.domain.member.persistence.EmailConfirmRedisRepository;
import com.eefy.member.domain.member.persistence.entity.enums.MemberRole;
import com.eefy.member.domain.member.persistence.entity.redis.EmailConfirm;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@Transactional
@SpringBootTest
class MemberServiceImplTest {
    @Autowired
    private MemberService memberService;
    @Autowired
    private EmailConfirmRedisRepository emailConfirmRedisRepository;

//    @Test
//    void join() {
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
//    }

//    @DisplayName("get student by email")
//    @Test
//    void getStudent() {
//        List<StudentResponse> members = memberService.getStudent("email", "test");
//        members.forEach(m -> {
//            assertThat(m.getEmail().contains("test")).isTrue();
//            assertThat(m.getRole()).isEqualTo(MemberRole.STUDENT);
//        });
//    }

//    @Test
//    void getMember() {
//        MemberResponse memberResponse = memberService.getMember(1);
//        assertThat(memberResponse.getMemberId()).isNotNull();
//        assertThat(memberResponse.getName()).isNotNull();
//        assertThat(memberResponse.getNickname()).isNotNull();
//        assertThat(memberResponse.getEmail()).isNotNull();
//        assertThat(memberResponse.getPhoneNumber()).isNotNull();
//        assertThat(memberResponse.getRole()).isNotNull();
//    }
}