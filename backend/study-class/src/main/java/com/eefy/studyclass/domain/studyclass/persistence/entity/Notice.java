package com.eefy.studyclass.domain.studyclass.persistence.entity;

import com.eefy.studyclass.global.entity.BaseEntity;

import javax.persistence.*;

@Entity
public class Notice extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer noticeId;

    @Column(nullable = false)
    private Integer memberId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "class_id")
    private StudyClass studyClass;

    @Column(nullable = false, length = 400)
    private String title;

    @Column(nullable = false, length = 2000)
    private String content;

    private Integer hit;
}
