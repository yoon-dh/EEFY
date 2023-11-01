package com.eefy.member.domain.member.persistence.entity;

import com.eefy.member.global.entity.BaseEntity;

import javax.persistence.*;

@Entity
public class QnaQuestion extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "qna_question_id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "member_id")
    private Member member;

    @Column(nullable = false, length = 2000)
    private String content;
}
