package com.eefy.homework.domain.homework.persistence.entity.enums;

public enum HomeworkType {
    READING("reading"),
    WRITING("writing"),
    LISTENING("listening"),
    SPEAKING("speaking");

    private String value;

    HomeworkType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
