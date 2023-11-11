package com.eefy.studyclass.domain.studyclass.dto.response;

import com.eefy.studyclass.domain.studyclass.persistence.entity.Notice;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class NoticeListResponse {
    private Integer id;
    private String title;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;


    public NoticeListResponse(Notice notice) {
        this.id = notice.getId();
        this.title = notice.getTitle();
        this.createdAt = notice.getCreatedAt();
        this.updatedAt = notice.getUpdatedAt();
    }
}
