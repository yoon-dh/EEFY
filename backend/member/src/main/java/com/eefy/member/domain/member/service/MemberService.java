package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.dto.request.JoinRequest;
import com.eefy.member.domain.member.dto.response.StudentResponse;

public interface MemberService {
    void join(JoinRequest joinRequest);
    StudentResponse getStudent(String email);
}
