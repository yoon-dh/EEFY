package com.eefy.studyclass.domain.studyclass.dto.response;

import lombok.Getter;

import java.util.List;

@Getter
public class StudyClassListResponse {
    private List<StudyClassResponse> sutdyClassList;
    private Integer totalCnt;

    public StudyClassListResponse(List<StudyClassResponse> sutdyClassList, Integer totalCnt) {
        this.sutdyClassList = sutdyClassList;
        this.totalCnt = totalCnt;
    }
}
