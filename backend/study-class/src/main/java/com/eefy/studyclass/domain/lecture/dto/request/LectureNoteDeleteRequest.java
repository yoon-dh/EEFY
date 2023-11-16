package com.eefy.studyclass.domain.lecture.dto.request;

import lombok.Getter;

@Getter
public class LectureNoteDeleteRequest {
    private Integer lectureId;
    private Integer pageNum;
}
