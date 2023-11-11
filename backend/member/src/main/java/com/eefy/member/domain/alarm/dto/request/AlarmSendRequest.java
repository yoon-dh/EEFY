package com.eefy.member.domain.alarm.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class AlarmSendRequest {
    private int classId;
    private String className;
    private String title;
    private String content;
}