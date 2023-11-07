package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.dto.request.JoinRequest;
import com.eefy.member.domain.member.dto.request.MemberUpdateRequest;
import com.eefy.member.domain.member.dto.response.StudentResponse;
import com.eefy.member.domain.member.event.UploadProfileImageEvent;
import com.eefy.member.domain.member.exception.validator.MemberValidator;
import com.eefy.member.domain.member.persistence.EmailConfirmRedisRepository;
import com.eefy.member.domain.member.persistence.MemberRepository;
import com.eefy.member.domain.member.persistence.entity.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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

    @Override
    @Transactional
    public void join(JoinRequest joinRequest) {
        Member member = joinRequest.toEntity();
        checkJoinStatus(joinRequest);

        member.encodePassword(passwordEncoder);
        emailConfirmRedisRepository.deleteById(member.getEmail());
        memberRepository.save(member);
    }

    @Override
    public List<StudentResponse> getStudent(String key, String value) {
        List<Member> members = selectMembers(key, value);

        if (members == null) return null;
        return members.stream().map(StudentResponse::new).collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void updateMember(int memberId, MemberUpdateRequest request, MultipartFile profileImage) {
        Member member = memberValidator.getValidMember(memberRepository.findById(memberId));

        eventPublisher.publishEvent(new UploadProfileImageEvent(member, profileImage));

        member.updateMemberInfo(request);
    }

    private void checkJoinStatus(JoinRequest joinRequest) {
        memberValidator.checkEmailConfirmStatus(emailConfirmRedisRepository.findById(joinRequest.getEmail()));
        memberValidator.checkJoinStatus(memberRepository.findMemberByEmail(joinRequest.getEmail()),
                joinRequest.getPassword(), joinRequest.getCheckedPassword());
    }

    private List<Member> selectMembers(String key, String value) {
        memberValidator.checkSelectMemersKey(key);
        if (key.equals("email")) return memberRepository.findByEmailContainingOrderByEmail(value);
        else if (key.equals("name")) return memberRepository.findByNameContainingOrderByName(value);
        else return null;
    }
}
