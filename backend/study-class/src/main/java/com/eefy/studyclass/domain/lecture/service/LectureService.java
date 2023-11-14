package com.eefy.studyclass.domain.lecture.service;

import com.eefy.studyclass.domain.lecture.dto.request.NoteInfoRequest;
import com.eefy.studyclass.domain.lecture.dto.response.LectureNoteListResponse;
import com.eefy.studyclass.domain.lecture.dto.request.LectureNoteRequest;
import com.eefy.studyclass.domain.lecture.dto.response.LectureResponse;
import com.eefy.studyclass.domain.lecture.dto.response.NoteInfoResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface LectureService {
    void makeLectureNote(Integer teacherId, LectureNoteRequest lectureNoteRequest, MultipartFile filePath) throws IOException;
    List<LectureNoteListResponse> getLectureNoteList(int classId);
    LectureResponse getLecture(int lectureId);
    void noteLecture(Integer memberId, NoteInfoRequest noteInfoRequest);
    NoteInfoResponse getLectureNoteDetailPage(int memberId, int lectureId, int pageNum);
}
