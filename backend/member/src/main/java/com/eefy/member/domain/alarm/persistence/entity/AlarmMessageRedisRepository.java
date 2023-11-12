package com.eefy.member.domain.alarm.persistence.entity;

import com.eefy.member.domain.alarm.persistence.entity.redis.AlarmMessage;
import org.springframework.data.repository.CrudRepository;

public interface AlarmMessageRedisRepository extends CrudRepository<AlarmMessage, Integer> {
}
