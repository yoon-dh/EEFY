package com.eefy.member.domain.alarm.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class PersonalAlarmSendRequest {
    private int targetMemberId;
    private int classId;
    private String link;
    private String className;
    private String title;
    private String content;
}
