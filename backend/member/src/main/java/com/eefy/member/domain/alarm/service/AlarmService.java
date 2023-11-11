package com.eefy.member.domain.alarm.service;

import com.eefy.member.domain.alarm.dto.request.AlarmSendRequest;
import com.eefy.member.domain.alarm.dto.request.SubscribeClassTopicRequest;
import com.eefy.member.domain.alarm.dto.response.SubscribeClassTopicResponse;

public interface AlarmService {
    String sendMessageTo(int memberId, AlarmSendRequest alarmSendRequest);
    SubscribeClassTopicResponse subscribeClassTopic(int classId, SubscribeClassTopicRequest request);
}
