package com.eefy.gateway.persistence.entity;

import com.eefy.gateway.persistence.entity.enums.MemberRole;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String email;
    private String password;
    private String nickname;
    private String name;
    private String phoneNumber;
    private String profileImagePath;
    @Enumerated(EnumType.STRING)
    private MemberRole role;
}
