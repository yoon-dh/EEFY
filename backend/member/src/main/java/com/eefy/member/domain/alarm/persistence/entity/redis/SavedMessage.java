package com.eefy.member.domain.alarm.persistence.entity.redis;

import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class SavedMessage {
    private int classId;
    private String link;
    private String className;
    private String title;
    private String content;
}
