package com.eefy.studyclass.domain.studyclass.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
public class SearchStudentResponse {
    private Integer memberId;
    private String email;
    private String nickname;
    private String name;
    private String phoneNumber;
    private String profileImagePath;

    @Builder
    public SearchStudentResponse(Integer memberId, String email, String nickname, String name, String phoneNumber, String profileImagePath) {
        this.memberId = memberId;
        this.email = email;
        this.nickname = nickname;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.profileImagePath = profileImagePath;
    }
}
