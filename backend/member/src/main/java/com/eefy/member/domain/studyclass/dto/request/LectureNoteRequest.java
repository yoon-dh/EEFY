package com.eefy.member.domain.studyclass.dto.request;

import lombok.Getter;

@Getter
public class LectureNoteRequest {
    private String title;
    private String content;
    private Integer classId;
}
