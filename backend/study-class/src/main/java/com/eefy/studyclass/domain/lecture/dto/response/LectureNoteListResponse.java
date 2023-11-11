package com.eefy.studyclass.domain.lecture.dto.response;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class LectureNoteListResponse {
    private Integer id;
    private String title;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    @Builder
    public LectureNoteListResponse(Integer id, String title, LocalDateTime createdAt, LocalDateTime modifiedAt) {
        this.id = id;
        this.title = title;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }
}
