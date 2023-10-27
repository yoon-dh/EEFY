package com.eefy.member.domain.member.persistence.entity;

import com.eefy.member.domain.member.persistence.entity.enums.NotiTypeEnum;
import com.eefy.member.global.entity.BaseEntity;

import javax.persistence.*;

@Entity
public class Notification extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notification_id")
    private Integer id;

    @Column(nullable = false)
    private Integer classId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "member_id")
    private Member member;

    @Column(nullable = false, length = 20)
    private NotiTypeEnum type;
}
