package com.eefy.homework.domain.homework.dto;

import com.eefy.homework.domain.homework.persistence.entity.Homework;
import com.eefy.homework.domain.homework.persistence.entity.enums.HomeworkQuestionType;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;

@Data
public class HomeworkQuestionDto {

    private Integer id;
    private Integer homeworkId;
    private String title;
    private String content;
    private String filePath;
    private HomeworkQuestionType field;
    private String answer;

    @QueryProjection
    public HomeworkQuestionDto(Integer id, Integer homeworkId, String title, String content,
        String filePath, HomeworkQuestionType field, String answer) {
        this.id = id;
        this.homeworkId = homeworkId;
        this.title = title;
        this.content = content;
        this.filePath = filePath;
        this.field = field;
        this.answer = answer;
    }
}
