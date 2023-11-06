package com.eefy.member.domain.member.exception.message;

import lombok.Getter;

@Getter
public enum AuthErrorEnum {
    NOT_VALID_MEMBER(1000, "사용자 조회 실패: 사용자 정보가 없습니다."),
    PASSWORD_NOT_MATCH(1001, "로그인 실패: 비밀번호가 일치하지 않습니다."),
    INVALID_ACCESS_TOKEN(1002, "토큰 인증 실패: 엑세스 토큰 인증에 실패했습니다."),
    INVALID_REFRESH_TOKEN(1003, "토큰 인증 실패: 리프레시 토큰 인증에 실패했습니다.");

    private final int code;
    private final String message;

    AuthErrorEnum(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
