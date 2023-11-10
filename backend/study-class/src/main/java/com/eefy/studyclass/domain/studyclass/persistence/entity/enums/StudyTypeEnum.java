package com.eefy.studyclass.domain.studyclass.persistence.entity.enums;

import lombok.Getter;

@Getter
public enum StudyTypeEnum {

    SPEAKING("말하기"),
    LISTENING("듣기"),
    WRITING("쓰기"),
    NONE("");

    private final String value;

    StudyTypeEnum(String value) {
        this.value = value;
    }
}
