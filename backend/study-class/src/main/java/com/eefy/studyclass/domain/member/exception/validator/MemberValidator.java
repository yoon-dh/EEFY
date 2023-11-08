package com.eefy.studyclass.domain.member.exception.validator;

import com.eefy.studyclass.domain.member.exception.message.MemberEnum;
import com.eefy.studyclass.domain.member.persistence.entity.Member;
import com.eefy.studyclass.global.exception.CustomException;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.Optional;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Component
public class MemberValidator {
    public void checkUserRoleInviteOrDisinviteMember(Member member, Optional studyClass) {
        if(!member.getRole().equals("TEACHER") || studyClass.isEmpty()) throw CustomException.builder()
                .status(HttpStatus.UNAUTHORIZED)
                .code(MemberEnum.NO_UNAUTHORIZED_ABOUT_INVITE_MEMBER.getCode())
                .message(MemberEnum.NO_UNAUTHORIZED_ABOUT_INVITE_MEMBER.getMessage())
                .build();
    }
}
