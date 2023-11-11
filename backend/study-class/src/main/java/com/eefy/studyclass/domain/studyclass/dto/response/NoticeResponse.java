package com.eefy.studyclass.domain.studyclass.dto.response;

import com.eefy.studyclass.domain.studyclass.persistence.entity.Notice;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class NoticeResponse {
    private Integer id;
    private String title;
    private String content;
    private Integer hit;
    private LocalDateTime createAt;
    private LocalDateTime updatedAt;

    public NoticeResponse(Notice notice) {
        this.id = notice.getId();
        this.title = notice.getTitle();
        this.content = notice.getContent();
        this.hit = notice.getHit();
        this.createAt = notice.getCreatedAt();
        this.updatedAt = notice.getUpdatedAt();
    }
}
