package com.eefy.member.domain.member.exception.message;

import lombok.Getter;

@Getter
public enum EmailErrorEnum {
    NOT_EXIST_EMAIL_CODE(1300, "이메일 인증번호 확인 오류: 이메일 인증 코드가 없습니다."),
    INVALID_EMAIL_CODE_REQUEST(1301, "이메일 인증번호 확인 오류: 이메일 인증 코드가 일치하지 않습니다."),
    NOT_EXIST_EMAIL_CONFIRM(1302, "이메일 인증번호 확인 오류: "),
    EXIST_ACTIVE_EMAIL_CODE(1303, "발급받은 인증 코드 존재: 시간 만료 후 이메일 인증 재요청이 가능합니다."),
    FAILED_EMAIL_CODE_SENDING(1304, "인증 코드 발송 오류: 이메일 인증 코드 발송에 실패했습니다.");

    private final int code;
    private final String message;

    EmailErrorEnum(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
