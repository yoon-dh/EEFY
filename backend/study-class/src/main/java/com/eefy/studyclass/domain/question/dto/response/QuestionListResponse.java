package com.eefy.studyclass.domain.question.dto.response;

import com.eefy.studyclass.domain.question.persistence.entity.QnaQuestion;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@Builder
public class QuestionListResponse {
    private int id;
    private String title;
    private boolean waitStatus;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    public QuestionListResponse(QnaQuestion question) {
        this.id = question.getId();
        this.title = question.getTitle();
        this.waitStatus = question.waitStatusToBoolean(question.getWaitStatus());
        this.createdAt = question.getCreatedAt();
        this.modifiedAt = question.getUpdatedAt();
    }
}