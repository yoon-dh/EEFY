package com.eefy.studyclass.domain.studyclass.controller;

import com.eefy.studyclass.domain.studyclass.dto.request.InviteMemberRequest;
import com.eefy.studyclass.domain.studyclass.dto.request.StudyClassCreateRequest;
import com.eefy.studyclass.domain.studyclass.dto.request.StudyClassModifyRequest;
import com.eefy.studyclass.domain.studyclass.dto.response.SearchStudentResponse;
import com.eefy.studyclass.domain.studyclass.dto.response.StudyClassListResponse;
import com.eefy.studyclass.domain.studyclass.service.StudyClassService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/study-class")
@RequiredArgsConstructor
public class StudyClassController {

    private final StudyClassService studyClassService;

    @GetMapping("")
    public ResponseEntity<StudyClassListResponse> getStudyClassList(@RequestHeader("Member-Id") Integer memberId) {

        return ResponseEntity.ok(studyClassService.getStudyClassList(memberId));
    }

    @PostMapping("/tutor")
    public ResponseEntity<Void> createStudyClass(@RequestHeader("Member-Id") Integer memberId,
                                                 @RequestBody StudyClassCreateRequest studyClassCreateRequest) {
        studyClassService.createStudyClass(memberId, studyClassCreateRequest);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/tutor")
    public ResponseEntity<Void> modifyStudyClass(@RequestHeader("Member-Id") Integer memberId,
                                                 @RequestBody StudyClassModifyRequest studyClassModifyRequest) {

        studyClassService.modifyStudyClass(studyClassModifyRequest);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/member")
    public ResponseEntity<List<SearchStudentResponse>> searchStudentList(@RequestHeader("Member-Id") Integer teacherId,
                                                                         @RequestParam("classId") Integer classId) {

        if (classId == null) return ResponseEntity.ok(studyClassService.searchStudentList(teacherId));
        else return ResponseEntity.ok(studyClassService.searchStudentList(teacherId, classId));
    }

    @PostMapping("/tutor/member")
    public ResponseEntity<Void> inviteMember(@RequestHeader("Member-Id") Integer memberId,
                                             @RequestBody InviteMemberRequest inviteMemberRequest) {

        studyClassService.inviteMember(memberId, inviteMemberRequest);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/tutor/member")
    public ResponseEntity<Void> disInviteMember(@RequestHeader("Member-Id") Integer memberId,
                                                @RequestBody InviteMemberRequest disInviteMemberRequest) {

        studyClassService.disInviteMember(memberId, disInviteMemberRequest);
        return ResponseEntity.ok().build();
    }
}
