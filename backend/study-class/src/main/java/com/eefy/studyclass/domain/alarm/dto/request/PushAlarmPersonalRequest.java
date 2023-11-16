package com.eefy.studyclass.domain.alarm.dto.request;

import lombok.Builder;
import lombok.Getter;

@Getter
public class PushAlarmPersonalRequest {
    private Integer targetMemberId;
    private Integer classId;
    private String link;
    private String className;
    private String title;
    private String content;

    @Builder
    public PushAlarmPersonalRequest(Integer targetMemberId, Integer classId, String link, String className, String title, String content) {
        this.targetMemberId = targetMemberId;
        this.classId = classId;
        this.link = link;
        this.className = className;
        this.title = title;
        this.content = content;
    }
}
