package com.eefy.studyclass.domain.studyclass.dto.request;

import lombok.Getter;

import java.util.List;

@Getter
public class StudyClassCreateRequest {
    private ClassInfoRequest classInfoRequest;
    private List<StudyClassStudentRequest> students;
}
