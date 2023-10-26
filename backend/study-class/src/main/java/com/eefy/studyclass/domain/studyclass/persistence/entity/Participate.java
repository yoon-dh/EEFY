package com.eefy.studyclass.domain.studyclass.persistence.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Participate {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "participate_id")
    private Integer id;

    @Column(nullable = false)
    private Integer memberId;

    @OneToOne(optional = false)
    @JoinColumn(name = "class_id")
    private StudyClass studyClass;

    @Column(nullable = false)
    private LocalDateTime createdAt;
}
