package com.eefy.studyclass.domain.question.persistence.entity;

import com.eefy.studyclass.domain.question.dto.request.AnswerModifyRequest;
import com.eefy.studyclass.global.entity.BaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class QnaAnswer extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "qna_answer_Id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "question_id")
    private QnaQuestion question;

    @Column(nullable = false)
    private Integer memberId;

    @Column(nullable = false, length = 2000)
    private String content;

    @Builder
    public QnaAnswer(Integer id, QnaQuestion question, Integer memberId, String content) {
        this.id = id;
        this.question = question;
        this.memberId = memberId;
        this.content = content;
    }

    public void updateQnaAnswerInfo(AnswerModifyRequest request) {
        this.content = request.getContent();
    }
}

