package com.eefy.studyclass.domain.studyclass.exception.message;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum StudyClassEnum {
    NO_EXIST_STUDY_CLASS_BY_ID(2200, "ID에 해당하는 스터디가 존재하지 않습니다."),
    NO_EXIST_STUDY_CLASS_BY_TEACHER(2201, "해당 선생님이 개설한 클래스가 없습니다."),
    NO_EXIST_STUDY_CLASS_BY_TEACHER_AND_CLASS(2202, "해당 선생님이 해당 ID의 클래스를 개설하지 않았습니다."),
    NO_UNAUTHORIZED_ABOUT_CREATE_CLASS(2203, "클래스를 생성할 권한이 없습니다. (USER ROLE: STUDENT)"),
    ALREADY_PARTICIPATE_STUDY_CLASS(2204, "이미 클래스에 참여하고 있습니다.");

    private final Integer code;
    private final String message;
}
