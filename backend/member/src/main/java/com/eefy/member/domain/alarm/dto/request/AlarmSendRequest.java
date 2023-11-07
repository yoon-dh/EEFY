package com.eefy.member.domain.alarm.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class AlarmSendRequest {
    private String title;
    private String body;
    private String targetToken;
}