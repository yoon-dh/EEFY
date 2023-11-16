package com.eefy.homework.domain.homework.dto.response;

import com.eefy.homework.domain.homework.dto.HomeworkQuestionDto;
import com.eefy.homework.domain.homework.dto.HomeworkStudentQuestionDto;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetProblemResponse {

    private List<HomeworkQuestionResponse> problems;
    // 내가 푼 문제에 대한 정보도 포함
    private List<HomeworkStudentQuestionDto> solvedProblem;
}
