package com.eefy.member.domain.member.controller;

import com.eefy.member.domain.member.dto.request.EmailConfirmRequest;
import com.eefy.member.domain.member.dto.request.EmailSendRequest;
import com.eefy.member.domain.member.dto.response.EmailSendResponse;
import com.eefy.member.domain.member.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
public class MemberController {
    private final EmailService emailService;

    @PostMapping("/auth/email")
    public ResponseEntity<EmailSendResponse> getAuthCode(@RequestBody EmailSendRequest emailSendRequest) {
        return emailService.sendEmail(emailSendRequest.getEmail());
    }

    @DeleteMapping("/auth/email")
    public ResponseEntity<String> confirmCode(@RequestBody EmailConfirmRequest emailConfirmRequest) {
        return emailService.confirmEmail(emailConfirmRequest);
    }
}
