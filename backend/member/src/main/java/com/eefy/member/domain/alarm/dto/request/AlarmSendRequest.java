package com.eefy.member.domain.alarm.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class AlarmSendRequest {
    private int classId;
    private String link;
    private String className;
    private String title;
    private String content;
}