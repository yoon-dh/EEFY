package com.eefy.member.domain.studyclass.service;

import com.eefy.member.domain.studyclass.dto.response.SearchStudentResponse;
import feign.Response;

import java.util.List;

public interface StudyClassService {
    Response searchStudentList(int teacherId, int classId);
}
