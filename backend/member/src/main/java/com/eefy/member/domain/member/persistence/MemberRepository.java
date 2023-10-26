package com.eefy.member.domain.member.persistence;

import com.eefy.member.domain.member.persistence.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
