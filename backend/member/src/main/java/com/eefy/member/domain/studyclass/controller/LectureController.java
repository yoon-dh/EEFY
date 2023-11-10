package com.eefy.member.domain.studyclass.controller;


import com.eefy.member.domain.studyclass.dto.request.LectureNoteRequest;
import com.eefy.member.domain.studyclass.dto.response.LectureNoteListResponse;
import com.eefy.member.domain.studyclass.service.StudyClassService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/lecture")
@Tag(name = "Lecture", description = "강의자료 관련 API")
public class LectureController {

    private final StudyClassService studyClassService;

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Void> makeLecture(@RequestHeader("Member-Id") Integer teacherId,
                                            @RequestPart(name = "request") LectureNoteRequest lectureNoteRequest,
                                            @RequestPart(name = "file") MultipartFile filePath) throws IOException {

        studyClassService.makeLectureNote(teacherId, lectureNoteRequest, filePath);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{classId}")
    public ResponseEntity<List<LectureNoteListResponse>> getLectureNoteList(@RequestHeader("Member-Id") Integer memberId,
                                                                            @PathVariable Integer classId) {

        return ResponseEntity.ok(studyClassService.getLectureNoteList(classId));
    }
}
