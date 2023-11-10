package com.eefy.member.domain.alarm.controller;

import com.eefy.member.domain.alarm.dto.request.AlarmSendRequest;
import com.eefy.member.domain.alarm.dto.request.ClassTopicCreateRequest;
import com.eefy.member.domain.alarm.dto.request.SubscribeClassTopicRequest;
import com.eefy.member.domain.alarm.dto.response.ClassTopicCreateResponse;
import com.eefy.member.domain.alarm.service.AlarmService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/alarm")
@RequiredArgsConstructor
@Tag(name = "Alarm", description = "알림 관련 API")
public class AlarmController {

    private final AlarmService alarmService;

    @Operation(summary = "푸시 알림 전송", description = "client에 푸시 알림을 전송하는 API")
    @PostMapping
    public ResponseEntity<String> pushMessage(@RequestBody AlarmSendRequest alarmSendRequest) {
        alarmService.sendMessageTo(
                alarmSendRequest.getTargetToken(),
                alarmSendRequest.getTitle(),
                alarmSendRequest.getBody());
        return ResponseEntity.ok().body("SUCCESS");
    }

    @Operation(summary = "알림 토필 생성", description = "클래스 개설 시 알림 토픽을 생성하는 API")
    @PostMapping
    public ClassTopicCreateResponse makeClassTopic(@RequestBody ClassTopicCreateRequest request) {
        return alarmService.makeClassTopic(request.getClassId());
    }

    @Operation(summary = "클래스에 대한 토픽 구독",
            description = "수강생이 클래스에 초대됐을 때 해당 클래스의 토픽을 구독하는 API")
    @PostMapping("/{classId}")
    public ResponseEntity<String> subscribeClassTopic(@PathVariable int classId,
                                                      @RequestBody SubscribeClassTopicRequest request) {
        alarmService.subscribeClassTopic(classId, request);
        return ResponseEntity.ok().body("SUCCESS");
    }
}
