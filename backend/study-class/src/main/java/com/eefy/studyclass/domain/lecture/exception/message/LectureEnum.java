package com.eefy.studyclass.domain.lecture.exception.message;

import lombok.Getter;

@Getter
public enum LectureEnum {
    UNAUTHORIZED_MAKE_LECTURE(1200, "해당 스터디에 대한 강의자료가 없습니다.");

    private final int code;
    private final String message;

    LectureEnum(int code, String message) {
        this.code = code;
        this.message = message;
    }
}