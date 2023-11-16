package com.eefy.homework.domain.homework.dto.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class StudyClassResponse {

    private Integer id;
    private Integer studentCnt;
    private String title;
    private String content;
    private String teacherName;
    private String teacherNickname;
    private String teacherProfileImagePath;

}
