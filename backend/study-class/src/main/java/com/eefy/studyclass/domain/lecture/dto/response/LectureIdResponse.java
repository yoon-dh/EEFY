package com.eefy.studyclass.domain.lecture.dto.response;

import lombok.Builder;

public class LectureIdResponse {
    private Integer id;

    @Builder
    public LectureIdResponse(Integer id) {
        this.id = id;
    }
}
