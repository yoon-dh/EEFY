package com.eefy.member.domain.member.dto.response;

import com.eefy.member.domain.member.persistence.entity.enums.MemberRole;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class JwtTokenResponse {
    private int memberId;
    private String email;
    private String name;
    private String nickname;
    private MemberRole role;
}
