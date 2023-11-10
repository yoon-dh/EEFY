package com.eefy.member.domain.alarm.service;

import com.eefy.member.domain.alarm.dto.request.SubscribeClassTopicRequest;
import com.eefy.member.domain.alarm.dto.response.SubscribeClassTopicResponse;

public interface AlarmService {
    void sendMessageTo(String targetToken, String title, String body);
    SubscribeClassTopicResponse subscribeClassTopic(int classId, SubscribeClassTopicRequest request);
}
