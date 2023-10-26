package com.eefy.member.domain.member.persistence;

import com.eefy.member.domain.member.persistence.entity.redis.Email;
import org.springframework.data.repository.CrudRepository;

public interface EmailRedisRepository extends CrudRepository<Email, String> {
}
