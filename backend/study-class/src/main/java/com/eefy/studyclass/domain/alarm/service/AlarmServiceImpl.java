package com.eefy.studyclass.domain.alarm.service;

import com.eefy.studyclass.domain.alarm.AlarmClientApi;
import com.eefy.studyclass.domain.alarm.dto.request.PushAlarmPersonalRequest;
import com.eefy.studyclass.domain.alarm.dto.request.PushAlarmRequest;
import com.eefy.studyclass.domain.alarm.dto.request.StudentIdsRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class AlarmServiceImpl implements AlarmService {

    private final AlarmClientApi alarmClientApi;

    @Override
    public void pushAlarmToStudent(Integer teacherId, PushAlarmRequest request) {
        alarmClientApi.pushAlarmToStudent(teacherId, request);
    }

    @Override
    public void subscribeStudyClassTopic(Integer classId, StudentIdsRequest request) {
        alarmClientApi.subscribeStudyClassTopic(classId, request);
    }

    @Override
    public void pushAlarmToPersonal(Integer memberId, PushAlarmPersonalRequest request) {
        alarmClientApi.pushAlarmToPersonal(memberId, request);
    }
}
