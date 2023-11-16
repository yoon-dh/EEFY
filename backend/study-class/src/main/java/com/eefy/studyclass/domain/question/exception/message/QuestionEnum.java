package com.eefy.studyclass.domain.question.exception.message;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum QuestionEnum {
    NO_EXIST_QUESTION_BY_ID(2300, "해당 ID의 질문이 없습니다."),
    UNAUTHORIZED_QUESTION_WRITER(2301, "작성자 ID와 일치하지 않습니다."),
    UNAUTHORIZED_ACCESS_QUESTION(2302, "질문을 작성한 작성자가 아니거나 강사가 아닙니다.");

    private final Integer code;
    private final String message;
}
