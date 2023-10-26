package com.eefy.studyclass.domain.studyclass.persistence.entity;

import com.eefy.studyclass.domain.studyclass.persistence.entity.enums.StudyTypeEnum;
import com.eefy.studyclass.global.entity.BaseEntity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class StudyClass extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer classId;

    @Column(nullable = false)
    private Integer memberId;

    @Column(nullable = false, length = 200)
    private String classTitle;

    @Column(nullable = false, length = 2000)
    private String classContent;

    @Column(nullable = false)
    private LocalDateTime startDate;

    @Column(nullable = false)
    private LocalDateTime endDate;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private StudyTypeEnum type;
}
