package com.eefy.studyclass.domain.studyclass.dto.response;

import lombok.Getter;

import java.util.List;

@Getter
public class StudyClassListResponse {
    private List<StudyClassResponse> studyClassList;
    private Integer totalCnt;

    public StudyClassListResponse(List<StudyClassResponse> studyClassList, Integer totalCnt) {
        this.studyClassList = studyClassList;
        this.totalCnt = totalCnt;
    }
}
