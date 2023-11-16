package com.eefy.studyclass.domain.question.exception.message;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AnswerEnum {
    NO_EXIST_ANSWER_BY_ID(2400, "해당 ID의 질문이 없습니다."),
    UNAUTHORIZED_ANSWER_WRITER(2401, "작성자 ID와 일치하지 않습니다.");

    private final Integer code;
    private final String message;
}
