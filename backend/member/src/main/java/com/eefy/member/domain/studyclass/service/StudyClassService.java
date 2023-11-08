package com.eefy.member.domain.studyclass.service;

import com.eefy.member.domain.studyclass.dto.response.SearchStudentResponse;

import java.util.List;
import java.util.Optional;

public interface StudyClassService {
    Optional<List<SearchStudentResponse>> searchStudentList(int teacherId, int classId);
}
