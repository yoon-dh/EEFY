package com.eefy.member.domain.member.exception.message;

import lombok.Getter;

@Getter
public enum MemberEnum {
    ALREADY_JOINED_MEMBER(1100, "이미 회원가입 된 사용자입니다."),
    PASSWORD_CHECK_MISMATCH(1101, "비밀번호와 비밀번호 확인 값이 일치하지 않습니다."),
    INVALID_EMAIL_CONFIRM_STATUS(1102, "이메일 인증 재시도: 인증 기간이 만료되었거나 인증되지 않은 요청임"),
    INVALID_SELECT_MEMBERS_KEY(1103, "수강생 정보 조회 오류: 지원하지 않는 key 입니다."),
    UNAUTHORIZED_MAKE_LECTURE(1200, "강의자료를 생성할 권한이 없습니다.");

    private final int code;
    private final String message;

    MemberEnum(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
