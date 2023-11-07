package com.eefy.member.domain.member.persistence.entity;

import com.eefy.member.domain.member.dto.request.MemberUpdateRequest;
import com.eefy.member.global.entity.BaseEntity;
import com.eefy.member.domain.member.persistence.entity.enums.MemberRole;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Member extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Integer id;

    @Column(nullable = false, length = 200, unique = true)
    private String email;

    @Column(nullable = false, length = 200)
    private String password;

    @Column(nullable = false, length = 200)
    private String nickname;

    @Column(nullable = false, length = 20)
    private String name;

    @Column(nullable = false, length = 20)
    private String phoneNumber;

    @Column(length = 400)
    private String profileImagePath;

    @Column(nullable = false, length = 20)
    @Enumerated(EnumType.STRING)
    private MemberRole role;

    @Builder
    public Member(String email, String password, String nickname,
                  String name, String phoneNumber, MemberRole role) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.role = role;
    }

    public void encodePassword(PasswordEncoder passwordEncoder) {
        this.password = passwordEncoder.encode(password);
    }

    public void updateMemberInfo(MemberUpdateRequest request) {
        nickname = request.getNickname();
        phoneNumber = request.getPhoneNumber();
    }

    public void updateProfileImageUrl(String profileImagePath) {
        this.profileImagePath = profileImagePath;
    }
}
