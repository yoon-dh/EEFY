package com.eefy.studyclass.domain.studyclass.service;

import com.eefy.studyclass.domain.studyclass.dto.request.InviteMemberRequest;
import com.eefy.studyclass.domain.studyclass.dto.request.StudyClassCreateRequest;
import com.eefy.studyclass.domain.studyclass.dto.request.StudyClassModifyRequest;
import com.eefy.studyclass.domain.studyclass.dto.response.SearchStudentResponse;
import com.eefy.studyclass.domain.studyclass.dto.response.StudyClassListResponse;
import com.eefy.studyclass.domain.studyclass.persistence.entity.Participate;

import java.util.List;

public interface StudyClassService {
    StudyClassListResponse getStudyClassList(Integer memberId);
    void createStudyClass(Integer memberId, StudyClassCreateRequest studyClassCreateRequest);
    void modifyStudyClass(StudyClassModifyRequest studyClassModifyRequest);
    List<SearchStudentResponse> searchStudentList(Integer teacherId, Integer classId);
    List<SearchStudentResponse> searchStudentList(Integer teacherId);
    List<SearchStudentResponse> getSearchStudentList(List<Participate> participateList);
    void inviteMember(Integer memberId, InviteMemberRequest inviteMemberRequest);
}
