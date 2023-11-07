package com.eefy.member.domain.member.exception.message;

import lombok.Getter;

@Getter
public enum MemberEnum {
    ALREADY_JOINED_MEMBER(1100, "이미 회원가입 된 사용자입니다."),
    PASSWORD_CHECK_MISMATCH(1101, "비밀번호와 비밀번호 확인 값이 일치하지 않습니다.");

    private final int code;
    private final String message;

    MemberEnum(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
