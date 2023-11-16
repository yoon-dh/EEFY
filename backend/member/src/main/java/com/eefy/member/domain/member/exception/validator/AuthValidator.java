package com.eefy.member.domain.member.exception.validator;

import com.eefy.member.domain.member.exception.message.AuthErrorEnum;
import com.eefy.member.domain.member.exception.message.EmailErrorEnum;
import com.eefy.member.domain.member.jwt.JwtTokenProvider;
import com.eefy.member.domain.member.persistence.entity.Member;
import com.eefy.member.domain.member.persistence.entity.redis.EmailCode;
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

    public void checkEmailCode(Optional<EmailCode> emailCodeOptional, String code) {
        String savedCode = getValidEmailCode(emailCodeOptional);
        validEmailCode(code, savedCode);
    }

    private String getValidEmailCode(Optional<EmailCode> emailCodeOptional) {
        if (emailCodeOptional.isEmpty()) {
            throw CustomException.builder()
                    .status(HttpStatus.BAD_REQUEST)
                    .code(EmailErrorEnum.NOT_EXIST_EMAIL_CODE.getCode())
                    .message(EmailErrorEnum.NOT_EXIST_EMAIL_CODE.getMessage())
                    .build();
        }
        return emailCodeOptional.get().getCode();
    }

    private void validEmailCode(String requestCode, String savedCode) {
        if (!requestCode.equals(savedCode)) {
            throw CustomException.builder()
                    .status(HttpStatus.BAD_REQUEST)
                    .code(EmailErrorEnum.INVALID_EMAIL_CODE_REQUEST.getCode())
                    .message(EmailErrorEnum.INVALID_EMAIL_CODE_REQUEST.getMessage())
                    .build();
        }
    }

    public void checkSendEmailStatus(boolean emailCodeStatus) {
        if (emailCodeStatus) {
            throw CustomException.builder()
                    .status(HttpStatus.BAD_REQUEST)
                    .code(EmailErrorEnum.EXIST_ACTIVE_EMAIL_CODE.getCode())
                    .message(EmailErrorEnum.EXIST_ACTIVE_EMAIL_CODE.getMessage())
                    .build();
        }
    }
}
