package com.eefy.member.domain.member.dto.response;

import com.eefy.member.domain.member.persistence.entity.enums.MemberRole;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class JwtTokenResponse {
    private int memberId;
    private String email;
    private String name;
    private String nickname;
    private MemberRole role;
}
