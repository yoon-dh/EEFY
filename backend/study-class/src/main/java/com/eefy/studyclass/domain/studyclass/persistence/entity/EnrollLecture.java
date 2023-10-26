package com.eefy.studyclass.domain.studyclass.persistence.entity;

import javax.persistence.*;

@Entity
public class EnrollLecture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "enroll_lecture_id")
    private Integer id;

    private Integer lectureId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "class_id")
    private StudyClass studyClass;
}
