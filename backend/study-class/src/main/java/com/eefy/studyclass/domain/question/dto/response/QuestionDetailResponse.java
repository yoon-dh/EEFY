package com.eefy.studyclass.domain.question.dto.response;
import com.eefy.studyclass.domain.question.persistence.entity.QnaQuestion;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@Builder
public class QuestionDetailResponse {
    private int questionId;
    private String title;
    private String content;
    private int memberId;
    private String name;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    public QuestionDetailResponse(QnaQuestion question) {
        this.questionId = question.getId();
        this.title = question.getTitle();
        this.content = question.getContent();
        this.memberId = question.getMemberId();
        this.name = "";
        this.createdAt = question.getCreatedAt();
        this.modifiedAt = question.getUpdatedAt();
    }
}
