package com.eefy.member.domain.member.persistence.entity.redis;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@RedisHash(value = "email", timeToLive = 300)
public class Email {
    @Id
    private String email;
    private String code;
}
