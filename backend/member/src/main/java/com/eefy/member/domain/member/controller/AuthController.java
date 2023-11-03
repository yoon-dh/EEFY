package com.eefy.member.domain.member.controller;

import com.eefy.member.domain.member.dto.request.EmailConfirmRequest;
import com.eefy.member.domain.member.dto.request.EmailSendRequest;
import com.eefy.member.domain.member.dto.request.LoginRequest;
import com.eefy.member.domain.member.dto.response.EmailSendResponse;
import com.eefy.member.domain.member.dto.response.JwtTokenResponse;
import com.eefy.member.domain.member.service.EmailService;
import com.eefy.member.domain.member.service.MemberService;
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
public class AuthController {
    private final EmailService emailService;
    private final MemberService memberService;

    @PostMapping
    public ResponseEntity<JwtTokenResponse> login(@RequestBody LoginRequest loginRequest) {
        return memberService.login(loginRequest);
    }

    @DeleteMapping
    public ResponseEntity<String> logout(@RequestHeader("Member-Id") int memberId) {
        memberService.logout(memberId);
        return ResponseEntity.ok("SUCCESS");
    }

    @PutMapping("/refresh")
    public ResponseEntity<JwtTokenResponse> refreshReissue(HttpServletRequest httpServletRequest) {
        return memberService.refreshReissue(httpServletRequest.getHeader("Authorization"));
    }

    @PostMapping("/email")
    public ResponseEntity<EmailSendResponse> sendEmail(@RequestBody EmailSendRequest emailSendRequest) {
        return emailService.sendEmail(emailSendRequest.getEmail());
    }

    @PostMapping("/email/confirm")
    public ResponseEntity<String> confirmCode(@RequestBody EmailConfirmRequest emailConfirmRequest) {
        return emailService.confirmCode(emailConfirmRequest);
    }
}
