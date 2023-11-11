package com.eefy.studyclass.domain.question.dto.request;

import lombok.Getter;

@Getter
public class QuestionWriteRequest {
    private Integer classId;
    private String title;
    private String content;
}
