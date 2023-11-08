package com.eefy.member.domain.alarm.controller;

import com.eefy.member.domain.alarm.dto.request.AlarmSendRequest;
import com.eefy.member.domain.alarm.service.AlarmService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
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
}
