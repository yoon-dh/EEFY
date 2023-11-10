package com.eefy.studyclass.domain.studyclass.persistence.entity;

import com.eefy.studyclass.global.entity.BaseEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Notice extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notice_id")
    private Integer id;

    @Column(nullable = false)
    private Integer memberId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "class_id")
    private StudyClass studyClass;

    @Column(nullable = false, length = 400)
    private String title;

    @Column(nullable = false, length = 2000)
    private String content;

    @Column(nullable = false)
    private Integer hit;

    @Builder
    public Notice(Integer id, Integer memberId, StudyClass studyClass, String title, String content, Integer hit) {
        this.id = id;
        this.memberId = memberId;
        this.studyClass = studyClass;
        this.title = title;
        this.content = content;
        this.hit = hit;
    }
}
