package com.eefy.studyclass.domain.member;

import com.eefy.studyclass.domain.member.persistence.entity.Member;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "member-service", url = "https://k9b306.p.ssafy.io/api/member/memberId?")
public interface MemberClientApi {
    @GetMapping
    Member getMemberInfo(@RequestHeader Integer memberId, @RequestParam Integer reqMemberId);
}

