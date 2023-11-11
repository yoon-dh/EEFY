package com.eefy.studyclass.domain.studyclass.dto.request;

import lombok.Getter;

@Getter
public class NoticeModifyRequest {
    private Integer id;
    private String title;
    private String content;
}
