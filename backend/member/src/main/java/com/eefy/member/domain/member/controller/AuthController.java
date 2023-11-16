package com.eefy.member.domain.member.controller;

import com.eefy.member.domain.member.dto.request.EmailConfirmRequest;
import com.eefy.member.domain.member.dto.request.EmailSendRequest;
import com.eefy.member.domain.member.dto.request.LoginRequest;
import com.eefy.member.domain.member.dto.response.EmailSendResponse;
import com.eefy.member.domain.member.dto.response.JwtTokenResponse;
import com.eefy.member.domain.member.service.EmailService;
import com.eefy.member.domain.member.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Auth", description = "사용자 인증 관련 API")
public class AuthController {
    private final EmailService emailService;
    private final AuthService authService;

    @Operation(summary = "로그인", description = "로그인 API")
    @PostMapping
    public ResponseEntity<JwtTokenResponse> login(@RequestBody LoginRequest loginRequest) {
        return authService.login(loginRequest);
    }

    @Operation(summary = "로그아웃", description = "로그아웃 API")
    @DeleteMapping
    public ResponseEntity<String> logout(@RequestHeader("Member-Id") int memberId) {
        authService.logout(memberId);
        return ResponseEntity.ok("SUCCESS");
    }

    @Operation(summary = "리프레시 토큰 재발급", description = "리프레시 토큰 재발급 API")
    @PutMapping("/refresh")
    public ResponseEntity<JwtTokenResponse> refreshReissue(HttpServletRequest httpServletRequest) {
        return authService.refreshReissue(httpServletRequest.getHeader("Authorization"));
    }

    @Operation(summary = "이메일 인증 코드 발송", description = "이메일 인증 코드를 발송하는 API")
    @PostMapping("/email")
    public ResponseEntity<EmailSendResponse> sendEmail(@RequestBody EmailSendRequest emailSendRequest) {
        return emailService.sendEmail(emailSendRequest.getEmail());
    }

    @Operation(summary = "이메일 인증 코드 확인", description = "이메일 인증 코드를 확인하는 API")
    @PostMapping("/email/confirm")
    public ResponseEntity<String> confirmCode(@RequestBody EmailConfirmRequest emailConfirmRequest) {
        return emailService.confirmCode(emailConfirmRequest);
    }
}