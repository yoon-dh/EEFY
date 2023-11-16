package com.eefy.studyclass.domain.question.dto.response;
import com.eefy.studyclass.domain.member.persistence.entity.Member;
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
    private boolean waitStatus;

    public QuestionDetailResponse(QnaQuestion question, Member member) {
        this.questionId = question.getId();
        this.title = question.getTitle();
        this.content = question.getContent();
        this.memberId = question.getMemberId();
        this.waitStatus = question.waitStatusToBoolean(question.getWaitStatus());
        this.name = member.getName();
        this.createdAt = question.getCreatedAt();
        this.modifiedAt = question.getUpdatedAt();
    }
}
