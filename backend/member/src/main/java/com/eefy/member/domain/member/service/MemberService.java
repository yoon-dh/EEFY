package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.dto.request.JoinRequest;
import com.eefy.member.domain.member.dto.request.LoginRequest;

public interface MemberService {
    void login(LoginRequest loginRequest);
    void logout(int memberId);
    void join(JoinRequest joinRequest);
}
