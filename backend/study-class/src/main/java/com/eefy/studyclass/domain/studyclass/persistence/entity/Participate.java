package com.eefy.studyclass.domain.studyclass.persistence.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class Participate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "participate_id")
    private Integer id;

    @Column(nullable = false)
    private Integer memberId;

    @ManyToOne(optional = false)
    @JoinColumn(name = "class_id")
    private StudyClass studyClass;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Builder
    public Participate(Integer id, Integer memberId, StudyClass studyClass, LocalDateTime createdAt) {
        this.id = id;
        this.memberId = memberId;
        this.studyClass = studyClass;
        this.createdAt = createdAt;
    }
}
