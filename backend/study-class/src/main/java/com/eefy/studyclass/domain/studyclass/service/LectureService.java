package com.eefy.studyclass.domain.studyclass.service;

import com.eefy.studyclass.domain.studyclass.dto.request.LectureNoteListResponse;
import com.eefy.studyclass.domain.studyclass.dto.request.LectureNoteRequest;
import com.eefy.studyclass.domain.studyclass.dto.request.LectureResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface LectureService {
    void makeLectureNote(Integer teacherId, LectureNoteRequest lectureNoteRequest, MultipartFile filePath) throws IOException;
    List<LectureNoteListResponse> getLectureNoteList(int classId);
    LectureResponse getLecture(int lectureId);
}
