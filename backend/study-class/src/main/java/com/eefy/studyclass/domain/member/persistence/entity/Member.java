package com.eefy.studyclass.domain.member.persistence.entity;

import lombok.Getter;

@Getter
public class Member {
    private Integer id;
    private String name;
    private String nickname;
    private String email;
    private String phoneNumber;
    private String profileImagePath;
    private String role;
}
