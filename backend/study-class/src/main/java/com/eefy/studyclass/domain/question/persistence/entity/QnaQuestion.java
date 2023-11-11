package com.eefy.studyclass.domain.question.persistence.entity;

import com.eefy.studyclass.domain.studyclass.persistence.entity.StudyClass;
import com.eefy.studyclass.global.entity.BaseEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class QnaQuestion extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "qna_question_id")
    private Integer id;

    @Column(nullable = false)
    private Integer memberId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "study_id")
    private StudyClass studyClass;

    @Column(nullable = false, length = 600)
    private String title;

    @Column(nullable = false, length = 2000)
    private String content;

    @Column(nullable = false)
    private byte waitStatus = 0;

    public boolean waitStatusToBoolean(byte waitStatus) {
        return waitStatus != (byte) 0;
    }

    @Builder
    public QnaQuestion(Integer id, Integer memberId, StudyClass studyClass, String title, String content, byte waitStatus) {
        this.id = id;
        this.memberId = memberId;
        this.studyClass = studyClass;
        this.title = title;
        this.content = content;
        this.waitStatus = waitStatus;
    }
}