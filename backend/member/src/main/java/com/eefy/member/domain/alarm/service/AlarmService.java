package com.eefy.member.domain.alarm.service;

import com.eefy.member.domain.alarm.dto.request.SubscribeClassTopicRequest;
import com.eefy.member.domain.alarm.dto.response.ClassTopicCreateResponse;

public interface AlarmService {
    void sendMessageTo(String targetToken, String title, String body);
    ClassTopicCreateResponse makeClassTopic(int classId);
    void subscribeClassTopic(int classId, SubscribeClassTopicRequest request);
}
