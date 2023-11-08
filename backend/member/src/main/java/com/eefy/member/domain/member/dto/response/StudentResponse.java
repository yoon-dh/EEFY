package com.eefy.member.domain.member.dto.response;

import com.eefy.member.domain.member.persistence.entity.Member;
import com.eefy.member.domain.member.persistence.entity.enums.MemberRole;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class StudentResponse {
    private Integer studyClassId;
    private boolean joinStatus;
    private Integer memberId;
    private String email;
    private String name;
    private String nickname;
    private String phoneNumber;
    private String profileImagePath;
    private MemberRole role;

    public StudentResponse(Member member, int studyClassId, boolean joinStatus) {
        this.studyClassId = studyClassId == 0 ? null : studyClassId;
        this.joinStatus = joinStatus;
        this.memberId = member.getId();
        this.email = member.getEmail();
        this.name = member.getName();
        this.nickname = member.getNickname();
        this.phoneNumber = member.getPhoneNumber();
        profileImagePath = member.getProfileImagePath();
        this.role = member.getRole();
    }
}
