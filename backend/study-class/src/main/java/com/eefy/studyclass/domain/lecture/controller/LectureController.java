package com.eefy.studyclass.domain.lecture.controller;

import com.eefy.studyclass.domain.lecture.dto.request.NoteInfoRequest;
import com.eefy.studyclass.domain.lecture.dto.response.LectureNoteListResponse;
import com.eefy.studyclass.domain.lecture.dto.request.LectureNoteRequest;
import com.eefy.studyclass.domain.lecture.dto.response.LectureResponse;
import com.eefy.studyclass.domain.lecture.dto.response.NoteInfoResponse;
import com.eefy.studyclass.domain.lecture.service.LectureService;
import io.swagger.v3.oas.annotations.Operation;
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
@RequestMapping("/api/lecture")
@RequiredArgsConstructor
public class LectureController {

    private final LectureService lectureService;

    @PostMapping(value = "/tutor",  consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Void> makeLecture(@RequestHeader("Member-Id") Integer teacherId,
                                            @RequestPart(name = "request") LectureNoteRequest lectureNoteRequest,
                                            @RequestPart(name = "file") MultipartFile filePath) throws IOException {

        lectureService.makeLectureNote(teacherId, lectureNoteRequest, filePath);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/list/{classId}")
    public ResponseEntity<List<LectureNoteListResponse>> getLectureNoteList(@RequestHeader("Member-Id") Integer memberId,
                                                                            @PathVariable Integer classId) {

        return ResponseEntity.ok(lectureService.getLectureNoteList(classId));
    }

    @GetMapping("/{lectureId}")
    public ResponseEntity<LectureResponse> getLecture(@RequestHeader("Member-Id") Integer memberId,
                                                      @PathVariable Integer lectureId) {
        return ResponseEntity.ok(lectureService.getLecture(lectureId));
    }
    
    @Operation(summary = "강의자료 필기", description = "강의자료에서 필기한 데이터를 저장하는 API")
    @PostMapping
    public ResponseEntity<Void> noteLecture(@RequestHeader("Member-Id") Integer memberId,
                                            @RequestBody NoteInfoRequest noteInfoRequest) {
        lectureService.noteLecture(memberId, noteInfoRequest);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "강의자료 상세 뷰어", description = "강의자료에서 필기한 데이터를 조회하는 API")
    @GetMapping
    public ResponseEntity<NoteInfoResponse> getLectureNoteDetailPage(@RequestHeader("Member-Id") Integer memberId,
                                                                     @RequestParam Integer lectureId,
                                                                     @RequestParam Integer pageNum) {
        return ResponseEntity.ok(lectureService.getLectureNoteDetailPage(memberId, lectureId, pageNum));
    }
}
