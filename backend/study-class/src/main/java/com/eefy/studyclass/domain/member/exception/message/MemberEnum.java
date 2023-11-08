package com.eefy.studyclass.domain.member.exception.message;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum MemberEnum {
    NO_UNAUTHORIZED_ABOUT_INVITE_MEMBER(2100, "회원을 초대할 권한이 없습니다. (USER ROLE: STUDENT)"),
    NO_UNAUTHORIZED_ABOUT_CREATE_CLASS(2101, "클래스를 생성할 권한이 없습니다. (USER ROLE: STUDENT)");

    private final Integer code;
    private final String message;
}
