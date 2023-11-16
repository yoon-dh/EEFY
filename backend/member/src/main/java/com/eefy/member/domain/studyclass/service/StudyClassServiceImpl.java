package com.eefy.member.domain.studyclass.service;

import com.eefy.member.domain.studyclass.dto.response.SearchStudentResponse;
import com.eefy.member.global.feign.StudyClassClient;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class StudyClassServiceImpl implements StudyClassService {
    private final StudyClassClient studyClassClient;

    @Override
    public List<SearchStudentResponse> searchStudentList(int classId, String jwtToken) {
        return studyClassClient.searchStudentList(jwtToken, classId);
    }
}
