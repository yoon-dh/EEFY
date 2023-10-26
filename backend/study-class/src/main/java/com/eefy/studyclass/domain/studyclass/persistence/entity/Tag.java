package com.eefy.studyclass.domain.studyclass.persistence.entity;

import javax.persistence.*;

@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    private Integer id;

    @Column(nullable = false)
    private String name;
}
