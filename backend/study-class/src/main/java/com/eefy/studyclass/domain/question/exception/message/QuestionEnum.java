package com.eefy.studyclass.domain.question.exception.message;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum QuestionEnum {
    NO_EXIST_QUESTION_BY_ID(2300, "해당 ID의 질문이 없습니다.");

    private final Integer code;
    private final String message;
}
