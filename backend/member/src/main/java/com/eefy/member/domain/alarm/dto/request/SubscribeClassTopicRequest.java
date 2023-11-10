package com.eefy.member.domain.alarm.dto.request;

import lombok.Getter;

import java.util.List;

@Getter
public class SubscribeClassTopicRequest {
    private List<Integer> studentIds;
}
