package com.eefy.studyclass.domain.studyclass.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
public class NoticeIdResponse {
    private Integer id;

    @Builder
    public NoticeIdResponse(Integer id) {
        this.id = id;
    }
}
