package com.eefy.homework.domain.homework.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class QuestionCountDto {

    private Integer homeworkStudentId;
    private Long count;


    @QueryProjection
    public QuestionCountDto(Integer homeworkStudentId, Long count) {
        this.homeworkStudentId = homeworkStudentId;
        this.count = count;
    }
}
