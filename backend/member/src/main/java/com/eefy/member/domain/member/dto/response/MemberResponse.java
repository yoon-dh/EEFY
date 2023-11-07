package com.eefy.member.domain.member.dto.response;

import com.eefy.member.domain.member.persistence.entity.enums.MemberRole;
import lombok.Data;

@Data
public class MemberResponse {
    private Integer memberId;
    private String email;
    private String nickname;
    private String name;
    private String phoneNumber;
    private String profileImagePath;
    private MemberRole role;
}
