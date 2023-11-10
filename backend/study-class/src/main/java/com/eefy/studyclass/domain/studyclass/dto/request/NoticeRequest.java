package com.eefy.studyclass.domain.studyclass.dto.request;

import lombok.Getter;

@Getter
public class NoticeRequest {
    private Integer classId;
    private String title;
    private String content;
}
