package com.eefy.studyclass.domain.studyclass.persistence.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class ClassHomework {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "class_homework_id")
    private Integer id;

    @Column(nullable = false)
    private Integer homeworkId;

    @ManyToOne
    @JoinColumn(name = "class_id")
    private StudyClass studyClass;

    @Builder
        public ClassHomework(Integer id, Integer homeworkId, StudyClass studyClass) {
        this.id = id;
        this.homeworkId = homeworkId;
        this.studyClass = studyClass;
    }
}
