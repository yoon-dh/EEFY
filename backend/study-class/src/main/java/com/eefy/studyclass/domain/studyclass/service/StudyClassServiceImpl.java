package com.eefy.studyclass.domain.studyclass.service;

import com.eefy.studyclass.domain.member.persistence.entity.Member;
import com.eefy.studyclass.domain.member.service.MemberServiceImpl;
import com.eefy.studyclass.domain.studyclass.dto.request.StudyClassCreateRequest;
import com.eefy.studyclass.domain.studyclass.dto.response.StudyClassListResponse;
import com.eefy.studyclass.domain.studyclass.dto.response.StudyClassResponse;
import com.eefy.studyclass.domain.studyclass.persistence.entity.StudyClass;
import com.eefy.studyclass.domain.studyclass.persistence.mysql.StudyClassRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class StudyClassServiceImpl implements StudyClassService {

    private final StudyClassRepository studyClassRepository;
    private final MemberServiceImpl memberService;

    @Override
    public StudyClassListResponse getStudyClassList(Integer memberId) {
        List<StudyClass> studyClassList = null;

        // memberId로 userRole 확인
        Member member = memberService.getMember(memberId);


        // 교사가 만든 자료 확인
        if(member.getRole().equals("TEACHER")) {
            studyClassList = studyClassRepository.findByMemberId(memberId);
        }

        // 학생이 참여하는 강의 확인
        if(member.getRole().equals("STUDENT")) {
            studyClassList = studyClassRepository.findByStudentId(memberId);
        }

        List<StudyClassResponse> studyClassResponseList = studyClassList.stream().map(studyClass -> {
//            String teacherName = memberService.getMember(studyClass.getMemberId()).getName();
            return StudyClassResponse.of(studyClass, "teacherName");
        }).collect(Collectors.toList());

        return new StudyClassListResponse(studyClassResponseList, studyClassResponseList.size());
    }

    @Override
    public void createStudyClass(StudyClassCreateRequest studyClassCreateRequest) {

    }
}
