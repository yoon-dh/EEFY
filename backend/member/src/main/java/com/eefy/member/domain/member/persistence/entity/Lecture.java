package com.eefy.member.domain.member.persistence.entity;

import javax.persistence.*;

@Entity
public class Lecture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lecture_id")
    private Integer id;

    @Column(nullable = false)
    private Integer memberId;
}
