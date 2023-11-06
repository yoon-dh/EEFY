package com.eefy.studyclass.domain.studyclass.controller;

import com.eefy.studyclass.domain.studyclass.dto.request.StudyClassCreateRequest;
import com.eefy.studyclass.domain.studyclass.dto.request.StudyClassModifyRequest;
import com.eefy.studyclass.domain.studyclass.dto.response.StudyClassListResponse;
import com.eefy.studyclass.domain.studyclass.service.StudyClassService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        studyClassService.createStudyClass(studyClassCreateRequest);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/tutor")
    public ResponseEntity<Void> modifyStudyClass(@RequestHeader("Member-Id") Integer memberId,
                                                 @RequestBody StudyClassModifyRequest studyClassModifyRequest) {

        studyClassService.modifyStudyClass(studyClassModifyRequest);
        return ResponseEntity.ok().build();
    }
}
