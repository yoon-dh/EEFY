package com.eefy.member.domain.alarm.controller;

import com.eefy.member.domain.alarm.dto.request.AlarmSendRequest;
import com.eefy.member.domain.alarm.dto.request.PersonalAlarmSendRequest;
import com.eefy.member.domain.alarm.dto.request.SubscribeClassTopicRequest;
import com.eefy.member.domain.alarm.dto.response.SubscribeClassTopicResponse;
import com.eefy.member.domain.alarm.service.AlarmService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/alarm")
@RequiredArgsConstructor
@Tag(name = "Alarm", description = "알림 관련 API")
public class AlarmController {

    private final AlarmService alarmService;

    @Operation(summary = "학생 개인 또는 강사에게 푸시 알림 전송", description = "학생 또는 강사 개인에게 푸시 알림을 전송하는 API")
    @PostMapping("/personal")
    public ResponseEntity<String> pushMessagePersonal(@RequestHeader("Member-Id") int memberId,
                                                      @RequestBody PersonalAlarmSendRequest request) {
        return ResponseEntity.ok().body(alarmService.sendMessageToPersonal(memberId, request));
    }

    @Operation(summary = "클래스 내 학생들에게 푸시 알림 전송", description = "클래스 내 학생들에게 푸시 알림을 전송하는 API")
    @PostMapping
    public ResponseEntity<String> pushMessageGroup(@RequestHeader("Member-Id") int memberId,
                                              @RequestBody AlarmSendRequest alarmSendRequest) {

        return ResponseEntity.ok().body(alarmService.sendMessageToGroup(memberId, alarmSendRequest));
    }

    @Operation(summary = "클래스에 대한 토픽 구독",
            description = "수강생이 클래스에 초대됐을 때 해당 클래스의 토픽을 구독하는 API")
    @PostMapping("/{classId}")
    public SubscribeClassTopicResponse subscribeClassTopic(@PathVariable int classId,
                                                           @RequestBody SubscribeClassTopicRequest request) {
        return alarmService.subscribeClassTopic(classId, request);
    }

    @Operation(summary = "메세지 목록 조회", description = "알림 메세지 목록을 조회하기 위한 API")
    @GetMapping("/message/{messageId}")
    public SubscribeClassTopicResponse getAlarmMessages(@RequestHeader("Member-Id") int memberId,
                                                        @PathVariable int messageId) {
        return alarmService.getAlarmMessages(memberId, messageId);
    }

    @Operation(summary = "메세지 읽음 처리", description = "알림 메세지를 읽음 처리 하기 위한 API")
    @DeleteMapping("/message/{messageId}")
    public SubscribeClassTopicResponse readAlarmMessage(@PathVariable int messageId) {
        return alarmService.readAlarmMessage(messageId);
    }
}
