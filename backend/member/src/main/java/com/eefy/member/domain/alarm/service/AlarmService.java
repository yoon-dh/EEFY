package com.eefy.member.domain.alarm.service;

import com.eefy.member.domain.alarm.dto.request.AlarmSendRequest;
import com.eefy.member.domain.alarm.dto.request.PersonalAlarmSendRequest;
import com.eefy.member.domain.alarm.dto.request.SubscribeClassTopicRequest;
import com.eefy.member.domain.alarm.dto.response.SubscribeClassTopicResponse;

public interface AlarmService {
    String sendMessageToPersonal(int memberId, PersonalAlarmSendRequest request);
    String sendMessageToGroup(int memberId, AlarmSendRequest alarmSendRequest);
    SubscribeClassTopicResponse subscribeClassTopic(int classId, SubscribeClassTopicRequest request);
}
