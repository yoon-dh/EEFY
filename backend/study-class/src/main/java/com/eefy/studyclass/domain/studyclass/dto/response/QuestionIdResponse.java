package com.eefy.studyclass.domain.studyclass.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
public class QuestionIdResponse {
    private Integer id;

    @Builder
    public QuestionIdResponse(Integer id) {
        this.id = id;
    }
}
