package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.dto.request.JoinRequest;
import com.eefy.member.domain.member.dto.request.MemberUpdateRequest;
import com.eefy.member.domain.member.dto.response.StudentResponse;
import com.eefy.member.domain.member.event.UploadProfileImageEvent;
import com.eefy.member.domain.member.exception.validator.MemberValidator;
import com.eefy.member.domain.member.persistence.EmailConfirmRedisRepository;
import com.eefy.member.domain.member.persistence.MemberRepository;
import com.eefy.member.domain.member.persistence.entity.Member;
import com.eefy.member.domain.member.persistence.entity.redis.EmailConfirm;
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
        checkEmailConfirmStatus(joinRequest.getEmail());
        memberValidator.checkJoinStatus(memberRepository.findMemberByEmail(joinRequest.getEmail()),
                joinRequest.getPassword(), joinRequest.getCheckedPassword());
    }

    private void checkEmailConfirmStatus(String email) {
        EmailConfirm emailConfirm = emailConfirmRedisRepository.findById(email)
                .orElseThrow(() -> {
                    log.error("이메일 인증 재시도: 인증 기간이 만료되었거나 인증되지 않은 요청임");
                    return new IllegalArgumentException("이메일 인증 재시도: 인증 기간이 만료되었거나 인증되지 않은 요청임");
                });
        if (!emailConfirm.isConfirmStatus()) {
            log.error("인증 오류 발생");
            throw new IllegalArgumentException("인증 오류 발생");
        }
    }

    private List<Member> selectMembers(String key, String value) {
        if (key.equals("email")) return memberRepository.findByEmailContainingOrderByEmail(value);
        else if (key.equals("name")) return memberRepository.findByNameContainingOrderByName(value);
        else throw new IllegalArgumentException("수강생 정보 조회 오류: 지원하지 않는 key");
    }
}
