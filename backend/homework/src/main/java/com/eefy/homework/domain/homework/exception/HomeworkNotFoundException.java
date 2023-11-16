package com.eefy.homework.domain.homework.exception;

import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class HomeworkNotFoundException extends RuntimeException {

    private final Integer homeworkId;

    public HomeworkNotFoundException(Integer homeworkId) {
        super("해당하는 과제를 찾을 수 없습니다.");
        this.homeworkId = homeworkId;
    }
}
