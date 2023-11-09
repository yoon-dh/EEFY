package com.eefy.homework.domain.homework.dto;

import com.eefy.homework.domain.homework.persistence.entity.HomeworkQuestion;
import com.eefy.homework.domain.homework.persistence.entity.HomeworkStudent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HomeworkStudentQuestionDto {

    private Integer id;
    private String submitAnswer;
    private String filePath;
    private Integer score;
    private String feedback;
}
