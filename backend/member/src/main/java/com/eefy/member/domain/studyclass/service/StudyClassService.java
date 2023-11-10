package com.eefy.member.domain.studyclass.service;

import com.eefy.member.domain.studyclass.dto.request.LectureNoteRequest;
import com.eefy.member.domain.studyclass.dto.response.LectureNoteListResponse;
import com.eefy.member.domain.studyclass.dto.response.SearchStudentResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface StudyClassService {
    List<SearchStudentResponse> searchStudentList(int teacherId, int classId);
    void makeLectureNote(int teacherId, LectureNoteRequest lectureNoteRequest, MultipartFile filePath) throws IOException;
    List<LectureNoteListResponse> getLectureNoteList(int classId);
}
