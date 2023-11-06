package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.dto.request.LoginRequest;
import com.eefy.member.domain.member.dto.response.JwtTokenResponse;
import com.eefy.member.domain.member.exception.validator.AuthValidator;
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
    private final AuthValidator authValidator;
    private final MemberRepository memberRepository;

    @Override
    @Transactional
    public ResponseEntity<JwtTokenResponse> login(LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        Member member = checkLogin(email, loginRequest);
        return makeJwtToken(member);
    }

    @Override
    @Transactional
    public ResponseEntity<JwtTokenResponse> refreshReissue(String accessToken) {
        accessToken = accessToken.split(" ")[1];
        Member member = checkRefreshReissueStatus(accessToken);
        makeJwtToken(member);
        return ResponseEntity.internalServerError().build();
    }

    @Override
    @Transactional
    public void logout(int memberId) {
        Member member = authValidator.getValidMember(memberRepository.findById(memberId));
        jwtTokenProvider.deleteRefreshToken(member.getId());
    }

    private Member checkLogin(String email, LoginRequest loginRequest) {
        Member member = authValidator.getValidMember(memberRepository.findMemberByEmail(email));
        authValidator.checkPassword(loginRequest.getPassword(), member.getPassword());
        return member;
    }

    private Member checkRefreshReissueStatus(String accessToken) {
        authValidator.checkAccessToken(accessToken);
        Member member = authValidator.getValidMember(
                memberRepository.findById(jwtTokenProvider.getUserId(accessToken)));
        authValidator.checkRefreshToken(member.getId());
        return member;
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
