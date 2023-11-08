package com.eefy.member.domain.alarm.service;

public interface AlarmService {
    void sendMessageTo(String targetToken, String title, String body);
}
