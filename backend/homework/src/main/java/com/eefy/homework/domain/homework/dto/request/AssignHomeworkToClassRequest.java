package com.eefy.homework.domain.homework.dto.request;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class AssignHomeworkToClassRequest {

    private Integer classId;
    private LocalDateTime dueDate;
    private Integer homeworkId;
}
