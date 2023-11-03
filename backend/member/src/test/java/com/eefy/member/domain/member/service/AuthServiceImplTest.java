package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.persistence.EmailConfirmRedisRepository;
import com.eefy.member.domain.member.persistence.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@Transactional
@SpringBootTest
class AuthServiceImplTest {
    @Autowired
    private AuthService authService;
    @Autowired
    private EmailConfirmRedisRepository emailConfirmRedisRepository;
    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private RedisTemplate<String, String> redisTemplate;

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
//        LoginRequest loginRequest = new LoginRequest("test@test.com", "1234^a");
//        ResponseEntity<JwtTokenResponse> response = memberService.login(loginRequest);
//        String accessToken = response.getHeaders().getFirst("Authorization");
//        String refreshToken = response.getHeaders().getFirst("Authorization-Refresh");
//        System.out.println("access: " + accessToken);
//        System.out.println("refresh: " + refreshToken);
    }

    @Test
    void refreshReissue() {
//        LoginRequest loginRequest = new LoginRequest("test@test.com", "1234^a");
//        ResponseEntity<JwtTokenResponse> response = memberService.login(loginRequest);
//        String accessToken = response.getHeaders().getFirst("Authorization");
//        String refreshToken = response.getHeaders().getFirst("Authorization-Refresh");
//
//        ResponseEntity<JwtTokenResponse> response2 = memberService.refreshReissue(accessToken);
//        String accessToken2 = response2.getHeaders().getFirst("Authorization");
//        String refreshToken2 = response2.getHeaders().getFirst("Authorization-Refresh");
//
//        assertThat(accessToken).isNotEqualTo(accessToken2);
//        assertThat(refreshToken).isNotEqualTo(refreshToken2);
    }

    @Test
    void logout() {
//        LoginRequest loginRequest = new LoginRequest("test@test.com", "1234^a");
//        memberService.login(loginRequest);
//
//        Member member = memberRepository.findMemberByEmail("test@test.com").get();
//        memberService.logout(member.getId());
//        String refreshToken = redisTemplate.opsForValue().get(Integer.toString(member.getId()));
//        assertThat(refreshToken).isNull();
    }
}