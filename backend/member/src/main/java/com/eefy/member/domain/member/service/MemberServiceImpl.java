package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.dto.request.JoinRequest;
import com.eefy.member.domain.member.dto.request.MemberUpdateRequest;
import com.eefy.member.domain.member.dto.response.MemberResponse;
import com.eefy.member.domain.member.dto.response.StudentResponse;
import com.eefy.member.domain.member.event.UploadProfileImageEvent;
import com.eefy.member.domain.member.exception.validator.MemberValidator;
import com.eefy.member.domain.member.persistence.EmailConfirmRedisRepository;
import com.eefy.member.domain.member.persistence.MemberRepository;
import com.eefy.member.domain.member.persistence.entity.Member;
import com.eefy.member.domain.member.persistence.entity.enums.MemberRole;
import com.eefy.member.domain.studyclass.dto.response.SearchStudentResponse;
import com.eefy.member.domain.studyclass.service.StudyClassService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;
    private final EmailConfirmRedisRepository emailConfirmRedisRepository;

    private final MemberValidator memberValidator;
    private final PasswordEncoder passwordEncoder;
    private final ApplicationEventPublisher eventPublisher;

    private final StudyClassService studyClassService;

    @Override
    @Transactional
    public void join(JoinRequest joinRequest) {
        Member member = joinRequest.toEntity();
        checkJoinStatus(joinRequest, member.getRole());

        member.encodePassword(passwordEncoder);
        emailConfirmRedisRepository.deleteById(member.getEmail());
        memberRepository.save(member);
    }

    @Override
    public List<StudentResponse> getStudent(String key, String value, int teacherId, int classId) {
        // studyClassId != 0인 경우 클래스에 참여중인 학생 목록 조회
        // 목록 조회해서 멤버아이디 캐싱하고 내가 캐싱하고있는 데이터가 study-class쪽에서 변화된다면 리프레시하게 하고십다!
        // 이벤트 기반으로 수정(서비스 분리)
        List<SearchStudentResponse> studentList = studyClassService.searchStudentList(teacherId, classId);
        if (studentList == null) return makeStudentResponse(selectMembers(key, value), classId);

        List<Integer> studentIds = studentList.stream()
                .map(SearchStudentResponse::getMemberId).collect(Collectors.toList());
        List<Member> members = selectMembers(key, value, studentIds);
        return makeStudentResponse(members, classId);
    }

    @Override
    @Transactional
    public void updateMember(int memberId, MemberUpdateRequest request, MultipartFile profileImage) {
        Member member = memberValidator.getValidMember(memberRepository.findById(memberId));
        eventPublisher.publishEvent(new UploadProfileImageEvent(member, profileImage));
        member.updateMemberInfo(request);
    }

    @Override
    public MemberResponse getMember(int memberId) {
        Member member = memberValidator.getValidMember(memberRepository.findById(memberId));
        return new ModelMapper().map(member, MemberResponse.class);
    }

    private void checkJoinStatus(JoinRequest joinRequest, MemberRole role) {
        memberValidator.checkRequest(joinRequest.getNickname(), role);
        memberValidator.checkEmailConfirmStatus(emailConfirmRedisRepository.findById(joinRequest.getEmail()));
        memberValidator.checkJoinStatus(
                memberRepository.findMemberByEmail(joinRequest.getEmail()),
                joinRequest.getPassword(),
                joinRequest.getCheckedPassword());
    }

    private List<StudentResponse> makeStudentResponse(List<Member> members, int classId) {
        if (members == null) return null;
        else return members.stream()
                .map(m -> new StudentResponse(m, classId, false))
                .collect(Collectors.toList());
    }

    private List<Member> selectMembers(String key, String value) {
        memberValidator.checkSelectMemersKey(key);
        if (key.equals("email"))
            return memberRepository.findByEmailContainingAndRoleOrderByEmail(value, MemberRole.STUDENT);
        else if (key.equals("name"))
            return memberRepository.findByNameContainingAndRoleOrderByName(value, MemberRole.STUDENT);
        else return null;
    }

    private List<Member> selectMembers(String key, String value, List<Integer> ids) {
        memberValidator.checkSelectMemersKey(key);
        if (key.equals("email"))
            return memberRepository.findByEmailContainingAndRoleAndIdNotInOrderByEmail(value, MemberRole.STUDENT, ids);
        else if (key.equals("name"))
            return memberRepository.findByNameContainingAndRoleAndIdNotInOrderByName(value, MemberRole.STUDENT, ids);
        else return null;
    }
}
