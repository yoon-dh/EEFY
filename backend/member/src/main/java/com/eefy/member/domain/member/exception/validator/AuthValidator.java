package com.eefy.member.domain.member.exception.validator;

import com.eefy.member.domain.member.exception.message.AuthErrorEnum;
import com.eefy.member.domain.member.jwt.JwtTokenProvider;
import com.eefy.member.domain.member.persistence.entity.Member;
import com.eefy.member.global.exception.CustomException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@RequiredArgsConstructor
@Component
public class AuthValidator {
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;

    public Member getValidMember(Optional<Member> member) {
        if (member.isEmpty()) {
            throw CustomException.builder()
                    .status(HttpStatus.BAD_REQUEST)
                    .code(AuthErrorEnum.NOT_VALID_MEMBER.getCode())
                    .message(AuthErrorEnum.NOT_VALID_MEMBER.getMessage())
                    .build();
        }
        return member.get();
    }

    public void checkPassword(String requestedPassword, String savedPassword) {
        if (!passwordEncoder.matches(requestedPassword, savedPassword)) {
            throw CustomException.builder()
                    .status(HttpStatus.BAD_REQUEST)
                    .code(AuthErrorEnum.PASSWORD_NOT_MATCH.getCode())
                    .message(AuthErrorEnum.PASSWORD_NOT_MATCH.getMessage())
                    .build();
        }
    }

    public void checkAccessToken(String accessToken) {
        if (accessToken == null || !jwtTokenProvider.validateToken(accessToken)) {
            throw CustomException.builder()
                    .status(HttpStatus.BAD_REQUEST)
                    .code(AuthErrorEnum.INVALID_ACCESS_TOKEN.getCode())
                    .message(AuthErrorEnum.INVALID_ACCESS_TOKEN.getMessage())
                    .build();
        }
    }

    public void checkRefreshToken(Integer memberId) {
        if (jwtTokenProvider.extractRefreshToken(memberId).isEmpty()) {
            throw CustomException.builder()
                    .status(HttpStatus.BAD_REQUEST)
                    .code(AuthErrorEnum.INVALID_REFRESH_TOKEN.getCode())
                    .message(AuthErrorEnum.INVALID_ACCESS_TOKEN.getMessage())
                    .build();
        }
    }
}
