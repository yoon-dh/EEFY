package com.eefy.homework.domain.homework.dto;

import com.querydsl.core.annotations.QueryProjection;
import java.time.LocalDateTime;
import lombok.Data;

@Data
public class HomeworkStudentDto {

    private Integer id;
    private Integer memberId;
    private Integer classHomeworkId;
    private LocalDateTime doneDate;
    private Integer progressRate;

    @QueryProjection
    public HomeworkStudentDto(Integer id, Integer memberId, Integer classHomeworkId,
        LocalDateTime doneDate, Integer progressRate) {
        this.id = id;
        this.memberId = memberId;
        this.classHomeworkId = classHomeworkId;
        this.doneDate = doneDate;
        this.progressRate = progressRate;
    }
}
