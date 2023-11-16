package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.dto.request.JoinRequest;
import com.eefy.member.domain.member.dto.request.LoginRequest;
import com.eefy.member.domain.member.dto.response.JwtTokenResponse;
import com.eefy.member.domain.member.dto.response.StudentResponse;
import org.springframework.http.ResponseEntity;

public interface AuthService {
    ResponseEntity<JwtTokenResponse> login(LoginRequest loginRequest);
    ResponseEntity<JwtTokenResponse> refreshReissue(String accessToken);
    void logout(int memberId);
}
