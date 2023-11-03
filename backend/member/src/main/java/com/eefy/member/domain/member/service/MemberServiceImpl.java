package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.dto.request.JoinRequest;
import com.eefy.member.domain.member.dto.response.StudentResponse;
import com.eefy.member.domain.member.persistence.EmailConfirmRedisRepository;
import com.eefy.member.domain.member.persistence.MemberRepository;
import com.eefy.member.domain.member.persistence.entity.Member;
import com.eefy.member.domain.member.persistence.entity.redis.EmailConfirm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;
    private final EmailConfirmRedisRepository emailConfirmRedisRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void join(JoinRequest joinRequest) {
        Member member = joinRequest.toEntity();
        checkEmailConfirmStatus(joinRequest.getEmail());

        if (memberRepository.findMemberByEmail(joinRequest.getEmail()).isPresent()) {
            throw new IllegalStateException("이미 회원가입 된 상태");
        }
        if (!joinRequest.getPassword().equals(joinRequest.getCheckedPassword())) {
            throw new IllegalArgumentException("비밀번호 확인 필요");
        }

        member.encodePassword(passwordEncoder);
        emailConfirmRedisRepository.deleteById(member.getEmail());
        memberRepository.save(member);
    }

    @Override
    public StudentResponse getStudent(String email) {

        return null;
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
}
