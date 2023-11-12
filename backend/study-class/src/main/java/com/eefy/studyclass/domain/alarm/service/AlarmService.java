package com.eefy.studyclass.domain.alarm.service;

import com.eefy.studyclass.domain.alarm.dto.request.PushAlarmPersonalRequest;
import com.eefy.studyclass.domain.alarm.dto.request.PushAlarmRequest;
import com.eefy.studyclass.domain.alarm.dto.request.StudentIdsRequest;

public interface AlarmService {
    void pushAlarmToStudent(Integer teacherId, PushAlarmRequest request);
    void subscribeStudyClassTopic(Integer classId, StudentIdsRequest request);
    void pushAlarmToPersonal(Integer memberId, PushAlarmPersonalRequest request);
}
