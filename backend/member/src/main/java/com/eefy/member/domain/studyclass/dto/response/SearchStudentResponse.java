package com.eefy.member.domain.studyclass.dto.response;

import lombok.Data;

@Data
public class SearchStudentResponse {
    private Integer memberId;
    private String email;
    private String nickname;
    private String name;
    private String phoneNumber;
    private String profileImagePath;
}
