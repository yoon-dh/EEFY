package com.eefy.member.domain.member.persistence;

import com.eefy.member.domain.member.persistence.entity.Member;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.eefy.member.domain.member.persistence.entity.QMember.member;

@Slf4j
@Repository
@RequiredArgsConstructor
public class MemberQueryDslRepository {

    private final JPAQueryFactory queryFactory;

    @Transactional
    public List<Member> findMembersByEmailOrName(String key, String value, List<Integer> ids) {
        return queryFactory.selectFrom(member)
                .where(
                        keyValueExpression(key, value),
                        containsIds(ids))
                .fetch();
    }

    private BooleanExpression keyValueExpression(String key, String value) {
        if (key.equals("name")) {
            return member.name.contains(value);
        } else if (key.equals("email")) {
            return member.email.contains(value);
        }
        return null;
    }

    private BooleanExpression containsIds(List<Integer> ids) {
        if (ids == null || ids.isEmpty()) return null;
        return member.id.notIn(ids);
    }
}
