package com.eefy.studyclass.domain.studyclass.persistence.entity;

import javax.persistence.*;

@Entity
public class PostTag {
    @Id
    private Integer postTagId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "class_id")
    private StudyClass studyClass;

    @OneToOne(optional = false)
    @JoinColumn(name = "tag_id")
    private Tag tag;
}
