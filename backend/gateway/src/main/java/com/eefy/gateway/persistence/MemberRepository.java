package com.eefy.gateway.persistence;

import com.eefy.gateway.persistence.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Integer> {
}
