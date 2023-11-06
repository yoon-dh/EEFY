package com.eefy.studyclass.domain.studyclass.exception.message;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum StudyClassEnum {
    NO_EXIST_STUDY_CLASS(2000, "해당 id 스터디가 존재하지 않습니다.");

    private final Integer code;
    private final String message;
}
