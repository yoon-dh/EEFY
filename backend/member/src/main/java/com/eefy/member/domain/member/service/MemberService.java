package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.dto.request.JoinRequest;
import com.eefy.member.domain.member.dto.request.MemberUpdateRequest;
import com.eefy.member.domain.member.dto.response.MemberResponse;
import com.eefy.member.domain.member.dto.response.StudentResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface MemberService {
    void join(JoinRequest joinRequest);
    List<StudentResponse> getStudent(String key, String value);
    void updateMember(int memberId, MemberUpdateRequest request, MultipartFile profileImage);
    MemberResponse getMember(int memberId);
}
