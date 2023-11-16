package com.eefy.member.domain.member.persistence;

import com.eefy.member.domain.member.persistence.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Integer> {
    Optional<Member> findMemberByEmail(String email);
}
