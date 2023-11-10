package com.eefy.member.domain.studyclass.dto.response;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class LectureNoteListResponse {
    private String title;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private String content;
}
