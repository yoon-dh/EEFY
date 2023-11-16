package com.eefy.member.domain.member.exception.message;

import lombok.Getter;

@Getter
public enum JwtErrorEnum {
    INVALID_SIGNITURE(1200, "잘못된 JWT 시그니쳐입니다."),
    INVALID_JWT_TOKEN(1201, "유효하지 않은 JWT 토큰입니다."),
    EXPIRED_TOKEN(1202, "만료된 JWT 토큰입니다."),
    NOT_SUPPORT_TOKEN(1203, "지원되지 않는 JWT 토큰입니다."),
    EMPTY_CLAIMS_STRING(1204, "토큰 claims string이 비어있습니다."),
    EMPTY_REFRESH_TOKEN(1205, "리프레시 토큰이 비어있습니다.");

    private final int code;
    private final String message;

    JwtErrorEnum(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
