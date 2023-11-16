package com.eefy.homework.domain.homework.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ClassStudentDto {

    private Integer memberId;
    private String email;
    private String nickname;
    private String name;
    private String phoneNumber;
    private String profileImagePath;

}
