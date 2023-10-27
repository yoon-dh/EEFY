package com.eefy.member.domain.member.persistence;

import com.eefy.member.domain.member.persistence.entity.redis.EmailCode;
import org.springframework.data.repository.CrudRepository;

public interface EmailCodeRedisRepository extends CrudRepository<EmailCode, String> {
}
