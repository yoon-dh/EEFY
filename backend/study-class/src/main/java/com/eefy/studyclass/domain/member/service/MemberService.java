package com.eefy.studyclass.domain.member.service;

import com.eefy.studyclass.domain.member.persistence.entity.Member;

public interface MemberService {
    Member getMemberInfo(Integer memberId, Integer reqMemberId);
}
