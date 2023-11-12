package com.eefy.homework.domain.homework.feign;

import com.eefy.homework.domain.homework.dto.AlarmSendRequest;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "member-service", url = "k9b306.p.ssafy.io:64417")
public interface MemberServiceFeignClient {

    @PostMapping("/api/alarm")
    String sendAlarmToClassMember(
        @RequestHeader("Member-Id") Integer memberId, @RequestBody AlarmSendRequest alarmSendRequest);
}
