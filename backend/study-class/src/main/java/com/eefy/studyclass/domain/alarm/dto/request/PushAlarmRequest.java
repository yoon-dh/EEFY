package com.eefy.studyclass.domain.alarm.dto.request;

import lombok.*;

@Data
@NoArgsConstructor
public class PushAlarmRequest {
    private Integer classId;
    private String link;
    private String className;
    private String title;
    private String content;

    @Builder
    public PushAlarmRequest(Integer classId, String link, String className, String title, String content) {
        this.classId = classId;
        this.link = link;
        this.className = className;
        this.title = title;
        this.content = content;
    }
}
