package com.eefy.studyclass.domain.studyclass.dto.request;

import lombok.Getter;

@Getter
public class NoticeCreateRequest {
    private Integer classId;
    private String title;
    private String content;
}
