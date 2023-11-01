package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.dto.request.JoinRequest;
import com.eefy.member.domain.member.dto.request.LoginRequest;
import com.eefy.member.domain.member.dto.response.JwtTokenResponse;
import com.eefy.member.domain.member.jwt.JwtTokenProvider;
import com.eefy.member.domain.member.persistence.EmailConfirmRedisRepository;
import com.eefy.member.domain.member.persistence.MemberRepository;
import com.eefy.member.domain.member.persistence.entity.Member;
import com.eefy.member.domain.member.persistence.entity.redis.EmailConfirm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final MemberRepository memberRepository;
    private final EmailConfirmRedisRepository emailConfirmRedisRepository;

    @Override
    @Transactional
    public void join(JoinRequest joinRequest) {
        Member member = joinRequest.toEntity();
        checkEmailConfirmStatus(joinRequest.getEmail());

        if (memberRepository.findMemberByEmail(joinRequest.getEmail()).isPresent()) {
            throw new IllegalStateException("이미 회원가입 된 상태");
        }
        if (!joinRequest.getPassword().equals(joinRequest.getCheckedPassword())) {
            throw new IllegalArgumentException("비밀번호 확인 필요");
        }

        member.encodePassword(passwordEncoder);
        emailConfirmRedisRepository.deleteById(member.getEmail());
        memberRepository.save(member);
    }

    @Override
    public ResponseEntity<JwtTokenResponse> login(LoginRequest loginRequest) {
        Member member = memberRepository.findMemberByEmail(loginRequest.getEmail())
                .orElseThrow(() -> {
                    log.error("로그인 실패: 요청 유저 없음");
                    return new IllegalArgumentException("로그인 실패: 요청 유저 없음");
                });

        return makeJwtToken(member);
    }

    @Override
    public ResponseEntity<JwtTokenResponse> refreshReissue(String accessToken) {
        accessToken = accessToken.split(" ")[1];
        if (accessToken != null && jwtTokenProvider.validateToken(accessToken)) {
            Member member = memberRepository.findById(jwtTokenProvider.getUserId(accessToken))
                    .orElseThrow(() -> new IllegalArgumentException("사용자 조회 오류: 없는 사용자"));
            String refreshToken = jwtTokenProvider.extractRefreshToken(member.getId())
                    .orElseThrow(() -> new IllegalArgumentException("refresh token 조회 오류"));
            if (refreshToken != null) {
                return makeJwtToken(member);
            }
        }
        return ResponseEntity.internalServerError().build();
    }

    @Override
    public void logout(int memberId) {
        memberRepository.findById(memberId)
                .orElseThrow(() -> {
                    log.error("로그인 실패: 요청 유저 없음");
                    return new IllegalArgumentException("로그인 실패: 요청 유저 없음");
                });

        jwtTokenProvider.deleteRefreshToken(memberId);
    }

    private void checkEmailConfirmStatus(String email) {
        EmailConfirm emailConfirm = emailConfirmRedisRepository.findById(email)
                .orElseThrow(() -> {
                    log.error("이메일 인증 재시도: 인증 기간이 만료되었거나 인증되지 않은 요청임");
                    return new IllegalArgumentException("이메일 인증 재시도: 인증 기간이 만료되었거나 인증되지 않은 요청임");
                });
        if (!emailConfirm.isConfirmStatus()) {
            log.error("인증 오류 발생");
            throw new IllegalArgumentException("인증 오류 발생");
        }
    }

    private ResponseEntity<JwtTokenResponse> makeJwtToken(Member member) {
        String accessToken = jwtTokenProvider.createAccessToken(member.getEmail(), member.getId());
        String refreshToken = jwtTokenProvider.createRefreshToken(member.getId());
        return makeLoginResponse(accessToken, refreshToken, member.getId());
    }

    private ResponseEntity<JwtTokenResponse> makeLoginResponse(String accessToken, String refreshToken, int memberId) {
        HttpHeaders headers = new HttpHeaders();
        String TOKEN_PREFIX = "Bearer ";
        headers.add("Authorization", TOKEN_PREFIX + accessToken);
        headers.add("Authorization-Refresh", TOKEN_PREFIX + refreshToken);
        return ResponseEntity.ok().headers(headers)
                .body(new JwtTokenResponse(memberId));
    }
}
