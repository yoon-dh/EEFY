package com.eefy.member.domain.studyclass.service;

import com.eefy.member.domain.studyclass.dto.response.SearchStudentResponse;

import java.util.List;

public interface StudyClassService {
    List<SearchStudentResponse> searchStudentList(int classId, String jwtToken);
}
