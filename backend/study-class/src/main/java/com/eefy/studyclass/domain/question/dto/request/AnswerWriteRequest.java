package com.eefy.studyclass.domain.question.dto.request;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class AnswerWriteRequest {
    private Integer questionId;
    private String content;
}