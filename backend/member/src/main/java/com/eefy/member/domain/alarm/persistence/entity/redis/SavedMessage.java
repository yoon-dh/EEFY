package com.eefy.member.domain.alarm.persistence.entity.redis;

import lombok.Data;
import lombok.ToString;

import java.time.LocalDateTime;

@ToString
@Data
public class SavedMessage {
    private int classId;
    private String link;
    private String className;
    private String title;
    private String content;
    private LocalDateTime createdAt;
}
