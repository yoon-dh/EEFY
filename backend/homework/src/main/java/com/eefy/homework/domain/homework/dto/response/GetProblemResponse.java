package com.eefy.homework.domain.homework.dto.response;

import com.eefy.homework.domain.homework.dto.HomeworkQuestionDto;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GetProblemResponse {

    private List<HomeworkQuestionDto> problems;
}
