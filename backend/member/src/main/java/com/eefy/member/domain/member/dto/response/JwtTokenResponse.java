package com.eefy.member.domain.member.dto.response;

import com.eefy.member.domain.member.persistence.entity.enums.MemberRole;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class JwtTokenResponse {
    private int memberId;
    private String email;
    private String name;
    private String nickname;
    private MemberRole role;
}
