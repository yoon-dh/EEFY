package com.eefy.homework.domain.homework.dto;

import com.querydsl.core.annotations.QueryProjection;
import java.time.LocalDateTime;
import lombok.Data;

@Data
public class HomeworkStudentDto {

    private Integer homeworkStudentId;
    private Integer memberId;
    private Integer classHomeworkId;
    private LocalDateTime doneDate;

    private Long solvedCount;
    private Long totalCount;

    @QueryProjection
    public HomeworkStudentDto(Integer homeworkStudentId, Integer memberId, Integer classHomeworkId,
        LocalDateTime doneDate) {
        this.homeworkStudentId = homeworkStudentId;
        this.memberId = memberId;
        this.classHomeworkId = classHomeworkId;
        this.doneDate = doneDate;
    }
}
