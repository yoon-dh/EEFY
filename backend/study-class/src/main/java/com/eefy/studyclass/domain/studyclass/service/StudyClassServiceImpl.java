package com.eefy.studyclass.domain.studyclass.service;

import com.eefy.studyclass.domain.member.exception.validator.MemberValidator;
import com.eefy.studyclass.domain.member.persistence.entity.Member;
import com.eefy.studyclass.domain.member.service.MemberServiceImpl;
import com.eefy.studyclass.domain.studyclass.dto.request.*;
import com.eefy.studyclass.domain.studyclass.dto.response.SearchStudentResponse;
import com.eefy.studyclass.domain.studyclass.dto.response.StudyClassListResponse;
import com.eefy.studyclass.domain.studyclass.dto.response.StudyClassResponse;
import com.eefy.studyclass.domain.studyclass.exception.validator.StudyClassValidator;
import com.eefy.studyclass.domain.studyclass.persistence.entity.Participate;
import com.eefy.studyclass.domain.studyclass.persistence.entity.StudyClass;
import com.eefy.studyclass.domain.studyclass.persistence.mysql.ParticipateRepository;
import com.eefy.studyclass.domain.studyclass.persistence.mysql.StudyClassRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
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
    private final MemberValidator memberValidator;

    @Override
    public StudyClassListResponse getStudyClassList(Pageable pageable, Integer memberId) {
        List<StudyClass> studyClassList = null;

        Member member = memberService.getMemberInfo(memberId, memberId);

        if(member.getRole().equals("TEACHER")) {
            studyClassList = studyClassRepository.findByMemberId(pageable, memberId);
        }

        if(member.getRole().equals("STUDENT")) {
            studyClassList = studyClassRepository.findByStudentId(pageable, memberId);
        }

        List<StudyClassResponse> studyClassResponseList = studyClassList.stream().map(studyClass -> {
            String teacherName = memberService.getMemberInfo(memberId, studyClass.getMemberId()).getNickname();
            return StudyClassResponse.of(studyClass, teacherName);
        }).collect(Collectors.toList());

        return new StudyClassListResponse(studyClassResponseList, studyClassResponseList.size());
    }

    @Override
    public void createStudyClass(Integer memberId, StudyClassCreateRequest studyClassCreateRequest) {

        studyClassValidator.checkUserRoleCreateStudyClass(memberService.getMemberInfo(memberId, memberId));

        StudyClass studyClass = StudyClass.builder()
                .memberId(memberId)
                .classTitle(studyClassCreateRequest.getTitle())
                .classContent(studyClassCreateRequest.getContent())
                .startDate(studyClassCreateRequest.getStartDate())
                .type(studyClassCreateRequest.getType())
                .build();

        studyClassRepository.save(studyClass);
    }

    @Override
    public void modifyStudyClass(StudyClassModifyRequest studyClassModifyRequest) {
        studyClassValidator.existsStudyClassByClassId(studyClassRepository, studyClassModifyRequest.getId());

        StudyClass studyClass = studyClassRepository.findById(studyClassModifyRequest.getId()).get();
        studyClass.updateStudyClassInfo(studyClassModifyRequest);
    }

    @Override
    public List<SearchStudentResponse> searchStudentList(Integer teacherId, Integer classId) {
        studyClassValidator.existsStudyClassByClassId(studyClassRepository, classId);
        studyClassValidator.existsByStudyClassByTeacherIdAndClassId(studyClassRepository, teacherId, classId);

        List<Participate> byMemberIdAndClassId = participateRepository.findByStudyClassId(classId);

        return getSearchStudentList(teacherId, byMemberIdAndClassId);
    }

    @Override
    public List<SearchStudentResponse> getSearchStudentList(Integer teacherId, List<Participate> participateList) {

        List<SearchStudentResponse> result = participateList.stream().map(m -> {
            Member member = memberService.getMemberInfo(teacherId, m.getMemberId());

            return SearchStudentResponse.builder()
                    .memberId(m.getMemberId())
                    .name(member.getName())
                    .nickname(member.getNickname())
                    .email(member.getEmail())
                    .profileImagePath(member.getProfileImagePath())
                    .phoneNumber(member.getPhoneNumber()).build();
        }).collect(Collectors.toList());

        return result;
    }

    @Override
    public void inviteMember(Integer memberId, InviteMemberRequest inviteMemberRequest) {
        memberValidator.checkUserRoleInviteOrDisinviteMember(memberService.getMemberInfo(memberId, memberId),
                studyClassRepository.findByIdAndMemberId(inviteMemberRequest.getClassId(), memberId));

        studyClassValidator.existsStudyClassByClassId(studyClassRepository, inviteMemberRequest.getClassId());

        StudyClass studyClass = studyClassRepository.findById(inviteMemberRequest.getClassId()).get();

        for (StudyClassStudentRequest studentRequest: inviteMemberRequest.getMemberList()) {

            studyClassValidator.alreadyJoinStudyClass(participateRepository.findByMemberIdAndStudyClassId(studentRequest.getMemberId(), inviteMemberRequest.getClassId()));

            Participate participate = Participate.builder()
                    .memberId(studentRequest.getMemberId())
                    .studyClass(studyClass).build();
            participateRepository.save(participate);
        }
    }

    @Override
    public void disInviteMember(Integer memberId, InviteMemberRequest disInviteMemberRequest) {
        memberValidator.checkUserRoleInviteOrDisinviteMember(memberService.getMemberInfo(memberId, memberId),
                studyClassRepository.findByIdAndMemberId(disInviteMemberRequest.getClassId(), memberId));

        studyClassValidator.existsStudyClassByClassId(studyClassRepository, disInviteMemberRequest.getClassId());

        StudyClass studyClass = studyClassRepository.findById(disInviteMemberRequest.getClassId()).get();

        for (StudyClassStudentRequest studentRequest: disInviteMemberRequest.getMemberList()) {

            studyClassValidator.alreadyUnJoinStudyClass(participateRepository.findByMemberIdAndStudyClassId(studentRequest.getMemberId(), disInviteMemberRequest.getClassId()));

            Participate participate = Participate.builder()
                    .memberId(studentRequest.getMemberId())
                    .studyClass(studyClass).build();
            participateRepository.save(participate);
        }
    }
}
