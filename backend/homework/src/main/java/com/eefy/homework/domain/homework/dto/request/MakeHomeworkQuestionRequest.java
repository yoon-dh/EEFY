package com.eefy.homework.domain.homework.dto.request;

import com.eefy.homework.domain.homework.persistence.entity.enums.HomeworkQuestionType;
import java.util.List;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class MakeHomeworkQuestionRequest {

    private Integer homeworkId;
    private String title;
    private String content;
    private String filePath;
    private HomeworkQuestionType field;
    private String answer;
    private List<ChoiceRequest> choiceRequests;
}
