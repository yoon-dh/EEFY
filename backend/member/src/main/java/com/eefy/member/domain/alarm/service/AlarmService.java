package com.eefy.member.domain.alarm.service;

import com.eefy.member.domain.alarm.dto.request.AlarmSendRequest;
import com.eefy.member.domain.alarm.dto.request.PersonalAlarmSendRequest;
import com.eefy.member.domain.alarm.dto.request.SubscribeClassTopicRequest;
import com.eefy.member.domain.alarm.dto.response.SavedMessageResponse;
import com.eefy.member.domain.alarm.dto.response.SubscribeClassTopicResponse;

import java.util.List;

public interface AlarmService {
    String sendMessageToPersonal(int memberId, PersonalAlarmSendRequest request);
    String sendMessageToGroup(int memberId, AlarmSendRequest alarmSendRequest);
    SubscribeClassTopicResponse subscribeClassTopic(int classId, SubscribeClassTopicRequest request);

    List<SavedMessageResponse> getAlarmMessages(int memberId);

    String readAlarmMessage(int messageId);
}
