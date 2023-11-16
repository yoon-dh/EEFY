package com.eefy.studyclass.domain.lecture.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
public class LectureIdResponse {
    private Integer id;

    @Builder
    public LectureIdResponse(Integer id) {
        this.id = id;
    }
}
