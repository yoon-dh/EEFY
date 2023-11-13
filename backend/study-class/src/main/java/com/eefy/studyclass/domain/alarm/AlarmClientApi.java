package com.eefy.studyclass.domain.alarm;

import com.eefy.studyclass.domain.alarm.dto.request.PushAlarmPersonalRequest;
import com.eefy.studyclass.domain.alarm.dto.request.PushAlarmRequest;
import com.eefy.studyclass.domain.alarm.dto.request.StudentIdsRequest;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "alarm-service", url = "k9b306.p.ssafy.io:64417")
public interface AlarmClientApi {
    @PostMapping("/api/alarm/tutor")
    void pushAlarmToStudent(@RequestHeader("Member-Id") Integer teacherId, @RequestBody PushAlarmRequest request);

    @PostMapping("/api/alarm/tutor/{classId}/topic")
    void createTopic(@PathVariable Integer classId);

    @PostMapping("/api/alarm/tutor/{classId}")
    void subscribeStudyClassTopic(@PathVariable Integer classId, @RequestBody StudentIdsRequest request);

    @PostMapping("/api/alarm/personal")
    void pushAlarmToPersonal(@RequestHeader("Member-Id") Integer memberId, PushAlarmPersonalRequest request);
}
