package com.eefy.studyclass.domain.studyclass.dto.request;

import lombok.Getter;

import java.util.List;

@Getter
public class InviteMemberRequest {
    List<StudyClassStudentRequest> memberList;
}
