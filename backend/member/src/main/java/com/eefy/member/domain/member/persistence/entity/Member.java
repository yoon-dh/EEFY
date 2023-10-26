package com.eefy.member.domain.member.persistence.entity;

import com.eefy.member.global.entity.BaseEntity;
import com.eefy.member.domain.member.persistence.entity.enums.UserRole;
import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
public class Member extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "member_id")
    private Integer id;

    @Column(nullable = false, length = 200)
    private String email;

    @Column(nullable = false, length = 200)
    private String password;

    @Column(nullable = false, length = 200)
    private String nickname;

    @Column(nullable = false, length = 20)
    private String name;

    @Column(nullable = false, length = 20)
    private String phoneNumber;

    @Column(nullable = false, length = 400)
    private String profileImagePath;

    @Column(nullable = false, length = 20)
    @Enumerated(EnumType.STRING)
    private UserRole role;
}
