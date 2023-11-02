package com.eefy.gateway.persistence.entity.enums;

import lombok.Getter;

@Getter
public enum MemberRole {

    TEACHER("교사"),
    STUDENT("학생");

    private final String value;

    MemberRole(String value) {
        this.value = value;
    }
}
