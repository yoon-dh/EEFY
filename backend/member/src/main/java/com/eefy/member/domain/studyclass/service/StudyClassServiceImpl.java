package com.eefy.member.domain.studyclass.service;

import com.eefy.member.domain.studyclass.dto.response.SearchStudentResponse;
import com.eefy.member.global.feign.StudyClassClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudyClassServiceImpl implements StudyClassService {
    private final StudyClassClient studyClassClient;

    @Override
    public Optional<List<SearchStudentResponse>> searchStudentList(int teacherId, int classId) {
        return studyClassClient.searchStudentList(teacherId, classId);
    }
}
