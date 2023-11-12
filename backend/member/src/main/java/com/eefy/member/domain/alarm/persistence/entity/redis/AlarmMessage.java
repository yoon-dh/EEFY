package com.eefy.member.domain.alarm.persistence.entity.redis;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.util.Map;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@RedisHash(value = "alarmMessage", timeToLive = 6652800)
public class AlarmMessage {
    @Id
    private int memberId;
    private Map<String, SavedMessage> messages;

    public void setMessages(Map<String, SavedMessage> messages) {
        this.messages = messages;
    }
}
