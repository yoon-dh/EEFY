package com.eefy.studyclass.domain.studyclass.exception.message;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum StudyClassEnum {
    NO_EXIST_STUDY_CLASS_BY_ID(2000, "ID에 해당하는 스터디가 존재하지 않습니다."),
    NO_EXIST_STUDY_CLASS_BY_TEACHER(2001, "해당 선생님이 개설한 클래스가 없습니다."),
    NO_EXIST_STUDY_CLASS_BY_TEACHER_AND_CLASS(2002, "해당 선생님이 해당 ID의 클래스를 개설하지 않았습니다.");

    private final Integer code;
    private final String message;
}
