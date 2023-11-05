package com.eefy.homework.domain.homework.dto.request;

import lombok.Data;

@Data
public class SolveProblemRequest {

    private Integer homeworkQuestionId;
    private Integer homeworkStudentId;
    private String submitAnswer;
    private String filePath;
}
