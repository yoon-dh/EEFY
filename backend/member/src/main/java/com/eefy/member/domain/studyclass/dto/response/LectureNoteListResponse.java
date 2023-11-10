package com.eefy.member.domain.studyclass.dto.response;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class LectureNoteListResponse {
    private Integer id;
    private String title;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private String content;

    @Builder
    public LectureNoteListResponse(Integer id, String title, LocalDateTime createdAt, LocalDateTime modifiedAt, String content) {
        this.id = id;
        this.title = title;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.content = content;
    }
}
