package com.eefy.studyclass.domain.studyclass.service;

import com.eefy.studyclass.domain.member.persistence.entity.Member;
import com.eefy.studyclass.domain.member.service.MemberServiceImpl;
import com.eefy.studyclass.domain.studyclass.dto.request.ClassInfoRequest;
import com.eefy.studyclass.domain.studyclass.dto.request.StudyClassCreateRequest;
import com.eefy.studyclass.domain.studyclass.dto.request.StudyClassModifyRequest;
import com.eefy.studyclass.domain.studyclass.dto.request.StudyClassStudentRequest;
import com.eefy.studyclass.domain.studyclass.dto.response.SearchStudentResponse;
import com.eefy.studyclass.domain.studyclass.dto.response.StudyClassListResponse;
import com.eefy.studyclass.domain.studyclass.dto.response.StudyClassResponse;
import com.eefy.studyclass.domain.studyclass.exception.validator.StudyClassValidator;
import com.eefy.studyclass.domain.studyclass.persistence.entity.Participate;
import com.eefy.studyclass.domain.studyclass.persistence.entity.StudyClass;
import com.eefy.studyclass.domain.studyclass.persistence.entity.enums.StudyTypeEnum;
import com.eefy.studyclass.domain.studyclass.persistence.mysql.ParticipateRepository;
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
    private final ParticipateRepository participateRepository;

    private final MemberServiceImpl memberService;
    private final StudyClassValidator studyClassValidator;

    @Override
    public StudyClassListResponse getStudyClassList(Integer memberId) {
        List<StudyClass> studyClassList = null;

        Member member = memberService.getMember(memberId);

        if(member.getRole().equals("TEACHER")) {
            studyClassList = studyClassRepository.findByMemberId(memberId);
        }

        if(member.getRole().equals("STUDENT")) {
            studyClassList = studyClassRepository.findByStudentId(memberId);
        }

        List<StudyClassResponse> studyClassResponseList = studyClassList.stream().map(studyClass -> {
            String teacherName = memberService.getMember(studyClass.getMemberId()).getNickname();
            return StudyClassResponse.of(studyClass, teacherName);
        }).collect(Collectors.toList());

        return new StudyClassListResponse(studyClassResponseList, studyClassResponseList.size());
    }

    @Override
    public void createStudyClass(Integer memberId, StudyClassCreateRequest studyClassCreateRequest) {
        ClassInfoRequest classInfoRequest = studyClassCreateRequest.getClassInfoRequest();

        StudyClass studyClass = StudyClass.builder()
                .memberId(memberId)
                .classTitle(classInfoRequest.getTitle())
                .classContent(classInfoRequest.getContent())
                .startDate(classInfoRequest.getStartDate())
                .endDate(classInfoRequest.getEndDate())
                .type(StudyTypeEnum.valueOf(classInfoRequest.getType()))
                .build();

        studyClassRepository.save(studyClass);

        for (StudyClassStudentRequest studentRequest: studyClassCreateRequest.getStudents()) {
            Participate participate = Participate.builder()
                    .memberId(studentRequest.getMemberId())
                    .studyClass(studyClass)
                    .build();
            participateRepository.save(participate);
        }
    }

    @Override
    public void modifyStudyClass(StudyClassModifyRequest studyClassModifyRequest) {
        studyClassValidator.existsStudyClassByClassId(studyClassRepository, studyClassModifyRequest.getId());

        studyClassRepository.updateStudyClass(studyClassModifyRequest.getTitle(),
                                              studyClassModifyRequest.getContent(),
                                              studyClassModifyRequest.getType(),
                                              studyClassModifyRequest.getStartDate(),
                                              studyClassModifyRequest.getEndDate());
    }

    @Override
    public List<SearchStudentResponse> searchStudentList(Integer teacherId, Integer classId) {
        studyClassValidator.existsStudyClassByClassId(studyClassRepository, classId);
        studyClassValidator.existsByStudyClassByTeacherIdAndClassId(studyClassRepository, teacherId, classId);

        List<Participate> byMemberIdAndClassId = participateRepository.findByMemberIdAndStudyClassId(teacherId, classId);

        return getSearchStudentList(byMemberIdAndClassId);
    }

    @Override
    public List<SearchStudentResponse> searchStudentList(Integer teacherId) {
        studyClassValidator.existsByTeacherId(studyClassRepository, teacherId);

        List<Participate> byMemberId = participateRepository.findByMemberId(teacherId);

        return getSearchStudentList(byMemberId);
    }

    @Override
    public List<SearchStudentResponse> getSearchStudentList(List<Participate> participateList) {
        List<SearchStudentResponse> result = participateList.stream().map(m -> {
            Member member = memberService.getMember(m.getMemberId());

            return SearchStudentResponse.builder()
                    .name(member.getName())
                    .email(member.getEmail())
                    .profileImagePath(member.getProfileImagePath())
                    .phoneNumber(member.getPhoneNumber()).build();
        }).collect(Collectors.toList());

        return result;
    }
}
