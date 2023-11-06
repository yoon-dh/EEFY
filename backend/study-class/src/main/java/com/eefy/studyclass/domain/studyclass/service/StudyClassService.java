package com.eefy.studyclass.domain.studyclass.service;

import com.eefy.studyclass.domain.studyclass.dto.request.StudyClassCreateRequest;
import com.eefy.studyclass.domain.studyclass.dto.request.StudyClassModifyRequest;
import com.eefy.studyclass.domain.studyclass.dto.response.StudyClassListResponse;

public interface StudyClassService {
    StudyClassListResponse getStudyClassList(Integer memberId);
    void createStudyClass(StudyClassCreateRequest studyClassCreateRequest);
    void modifyStudyClass(StudyClassModifyRequest studyClassModifyRequest);
}
