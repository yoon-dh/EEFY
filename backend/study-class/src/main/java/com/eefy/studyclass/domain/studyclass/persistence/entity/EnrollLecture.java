package com.eefy.studyclass.domain.studyclass.persistence.entity;

import javax.persistence.*;

@Entity
public class EnrollLecture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer enrollLectureId;

    private Integer lectureId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "class_id")
    private StudyClass studyClass;
}
