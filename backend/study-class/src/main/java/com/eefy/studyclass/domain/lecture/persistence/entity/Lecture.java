package com.eefy.studyclass.domain.lecture.persistence.entity;

import com.eefy.studyclass.domain.studyclass.persistence.entity.StudyClass;
import com.eefy.studyclass.global.entity.BaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Lecture extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lecture_id")
    private Integer id;

    @Column(nullable = false)
    private Integer memberId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "class_id")
    private StudyClass studyClass;

    @Column(nullable = false, length = 2000)
    private String filePath;

    @Column(nullable = false, length = 400)
    private String title;

    @Column(nullable = false, length = 2000)
    private String content;

    @Builder
    public Lecture(Integer id, Integer memberId, StudyClass studyClass, String filePath, String title, String content) {
        this.id = id;
        this.memberId = memberId;
        this.studyClass = studyClass;
        this.filePath = filePath;
        this.title = title;
        this.content = content;
    }
}

