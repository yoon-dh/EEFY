package com.eefy.studyclass.domain.member.persistence.entity;

import com.eefy.studyclass.domain.member.dto.MemberTopicMessage;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class Member {
    private Integer id;
    private String name;
    private String nickname;
    private String email;
    private String phoneNumber;
    private String profileImagePath;
    private String role;

    public Member(MemberTopicMessage memberTopicMessage) {
        this.nickname = memberTopicMessage.getNickname();
        this.profileImagePath = memberTopicMessage.getProfileImagePath();
    }
}
