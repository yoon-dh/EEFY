package com.eefy.studyclass.domain.question.dto.response;

import com.eefy.studyclass.domain.member.persistence.entity.Member;
import com.eefy.studyclass.domain.question.persistence.entity.QnaAnswer;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class AnswerListResponse {
    private int answerId;
    private int memberId;
    private String nickName;
    private String name;
    private String profilePath;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    public AnswerListResponse(QnaAnswer qnaAnswer, Member member) {
        this.answerId = qnaAnswer.getId();
        this.memberId = member.getMemberId();
        this.name = member.getName();
        this.profilePath = member.getProfileImagePath();
        this.nickName = member.getNickname();
        this.content = qnaAnswer.getContent();
        this.createdAt = qnaAnswer.getCreatedAt();
        this.modifiedAt = qnaAnswer.getUpdatedAt();
    }
}
