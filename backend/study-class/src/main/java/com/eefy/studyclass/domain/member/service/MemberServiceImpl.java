package com.eefy.studyclass.domain.member.service;

import com.eefy.studyclass.domain.member.MemberClientApi;
import com.eefy.studyclass.domain.member.persistence.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberServiceImpl implements MemberService {

    private final MemberClientApi memberClientApi;

    @Override
    public Member getMemberInfo(Integer memberId, Integer reqMemberId) {
        return memberClientApi.getMemberInfo(memberId, reqMemberId);
    }
}
