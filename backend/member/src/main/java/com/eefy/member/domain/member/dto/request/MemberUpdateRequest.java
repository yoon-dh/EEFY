package com.eefy.member.domain.member.dto.request;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class MemberUpdateRequest {
    private String nickname;
    private String phoneNumber;
}
