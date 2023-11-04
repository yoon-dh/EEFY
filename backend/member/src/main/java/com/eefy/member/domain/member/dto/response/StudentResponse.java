package com.eefy.member.domain.member.dto.response;

import com.eefy.member.domain.member.persistence.entity.Member;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class StudentResponse {
    private Integer memberId;
    private String email;
    private String name;
    private String nickname;
    private String phoneNumber;

    public StudentResponse(Member member) {
        memberId = member.getId();
        email = member.getEmail();
        name = member.getName();
        nickname = member.getNickname();
        phoneNumber = member.getPhoneNumber();
    }
}
