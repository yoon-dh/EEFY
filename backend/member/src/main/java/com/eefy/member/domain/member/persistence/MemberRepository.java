package com.eefy.member.domain.member.persistence;

import com.eefy.member.domain.member.persistence.entity.Member;
import com.eefy.member.domain.member.persistence.entity.enums.MemberRole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Integer> {
    Optional<Member> findMemberByEmail(String email);
    List<Member> findByEmailContainingAndRoleOrderByEmail(String email, MemberRole role);
    List<Member> findByNameContainingAndRoleOrderByName(String name, MemberRole role);
    List<Member> findByEmailContainingAndRoleAndIdNotInOrderByEmail(String email, MemberRole role, List<Integer> ids);
    List<Member> findByNameContainingAndRoleAndIdNotInOrderByName(String name, MemberRole role, List<Integer> ids);
}
