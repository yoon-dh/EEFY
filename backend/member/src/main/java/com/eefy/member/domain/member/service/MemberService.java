package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.dto.request.JoinRequest;
import com.eefy.member.domain.member.dto.response.StudentResponse;

import java.util.List;

public interface MemberService {
    void join(JoinRequest joinRequest);
    List<StudentResponse> getStudent(String key, String value);
}
