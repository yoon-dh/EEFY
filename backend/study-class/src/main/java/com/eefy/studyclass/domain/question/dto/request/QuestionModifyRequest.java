package com.eefy.studyclass.domain.question.dto.request;

import lombok.Getter;

@Getter
public class QuestionModifyRequest {
    private Integer id;
    private String title;
    private String content;
}
