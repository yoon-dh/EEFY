package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.dto.request.LoginRequest;
import com.eefy.member.domain.member.dto.response.JwtTokenResponse;
import com.eefy.member.domain.member.jwt.JwtTokenProvider;
import com.eefy.member.domain.member.persistence.MemberRepository;
import com.eefy.member.domain.member.persistence.entity.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final JwtTokenProvider jwtTokenProvider;
    private final MemberRepository memberRepository;

    @Override
    @Transactional
    public ResponseEntity<JwtTokenResponse> login(LoginRequest loginRequest) {
        Member member = memberRepository.findMemberByEmail(loginRequest.getEmail())
                .orElseThrow(() -> {
                    log.error("로그인 실패: 요청 유저 없음");
                    return new IllegalArgumentException("로그인 실패: 요청 유저 없음");
                });

        return makeJwtToken(member);
    }

    @Override
    @Transactional
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
    @Transactional
    public void logout(int memberId) {
        memberRepository.findById(memberId)
                .orElseThrow(() -> {
                    log.error("로그인 실패: 요청 유저 없음");
                    return new IllegalArgumentException("로그인 실패: 요청 유저 없음");
                });

        jwtTokenProvider.deleteRefreshToken(memberId);
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
