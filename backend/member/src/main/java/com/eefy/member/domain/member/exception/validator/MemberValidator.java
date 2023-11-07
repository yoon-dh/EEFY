package com.eefy.member.domain.member.exception.validator;

import com.eefy.member.domain.member.exception.message.AuthErrorEnum;
import com.eefy.member.domain.member.exception.message.MemberEnum;
import com.eefy.member.domain.member.persistence.entity.Member;
import com.eefy.member.global.exception.CustomException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class MemberValidator {

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

    public void checkJoinStatus(Optional<Member> memberOptional, String pasword, String checkedPassword) {
        checkAlreadyJoinStatus(memberOptional);
        checkPasswordStatus(pasword, checkedPassword);

    }

    private void checkAlreadyJoinStatus(Optional<Member> memberOptional) {
        if (memberOptional.isPresent()) {
            throw CustomException.builder()
                    .status(HttpStatus.BAD_REQUEST)
                    .code(MemberEnum.ALREADY_JOINED_MEMBER.getCode())
                    .message(MemberEnum.ALREADY_JOINED_MEMBER.getMessage())
                    .build();
        }
    }

    private void checkPasswordStatus(String pasword, String checkedPassword) {
        if (!pasword.equals(checkedPassword)) {
            throw CustomException.builder()
                    .status(HttpStatus.BAD_REQUEST)
                    .code(MemberEnum.PASSWORD_CHECK_MISMATCH.getCode())
                    .message(MemberEnum.PASSWORD_CHECK_MISMATCH.getMessage())
                    .build();
        }
    }
}
