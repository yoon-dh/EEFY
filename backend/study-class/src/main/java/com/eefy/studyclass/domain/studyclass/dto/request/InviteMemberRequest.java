package com.eefy.studyclass.domain.studyclass.dto.request;

import lombok.Getter;

import java.util.List;

@Getter
public class InviteMemberRequest {
    private Integer classId;
    List<StudyClassStudentRequest> memberList;
}
