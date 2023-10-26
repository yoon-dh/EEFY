package com.eefy.member.domain.member.persistence.entity.enums;

import lombok.Getter;

@Getter
public enum UserRole {

    TEACHER("교사"),
    STUDENT("학생");

    private final String value;

    UserRole(String value) {
        this.value = value;
    }
}
