package com.eefy.studyclass.domain.studyclass.persistence.entity;

import com.eefy.studyclass.global.entity.BaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Participate extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "participate_id")
    private Integer id;

    @Column(nullable = false)
    private Integer memberId;

    @ManyToOne(optional = false)
    @JoinColumn(name = "class_id")
    private StudyClass studyClass;

    @Builder
    public Participate(Integer id, Integer memberId, StudyClass studyClass) {
        this.id = id;
        this.memberId = memberId;
        this.studyClass = studyClass;
    }
}
