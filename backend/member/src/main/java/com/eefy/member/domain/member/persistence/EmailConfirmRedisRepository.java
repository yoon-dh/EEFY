package com.eefy.member.domain.member.persistence;

import com.eefy.member.domain.member.persistence.entity.redis.EmailConfirm;
import org.springframework.data.repository.CrudRepository;

public interface EmailConfirmRedisRepository extends CrudRepository<EmailConfirm, String> {
}
