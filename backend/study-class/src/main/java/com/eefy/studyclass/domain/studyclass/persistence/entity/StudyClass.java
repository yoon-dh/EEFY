package com.eefy.studyclass.domain.studyclass.persistence.entity;

import com.eefy.studyclass.domain.studyclass.persistence.entity.enums.StudyTypeEnum;
import com.eefy.studyclass.global.entity.BaseEntity;
import lombok.Getter;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
public class StudyClass extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "class_id")
    private Integer id;

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

    @OneToMany(mappedBy = "studyClass")
    private List<Participate> participateList;

    @Formula("(select count(*) from participate where participate.class_id = class_id)")
    private Integer studentCnt;
}
