package com.eefy.homework.domain.homework.dto.response;

import com.eefy.homework.domain.homework.dto.ChoiceDto;
import com.eefy.homework.domain.homework.dto.HomeworkQuestionDto;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HomeworkQuestionResponse {

    private HomeworkQuestionDto homeworkQuestion;
    private List<ChoiceDto> choices;

    public static HomeworkQuestionResponse of(HomeworkQuestionDto homeworkQuestion,
        List<ChoiceDto> choiceDto) {

        return new HomeworkQuestionResponse(homeworkQuestion, choiceDto);
    }
}
