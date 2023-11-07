package com.eefy.studyclass.domain.studyclass.dto.request;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class ClassInfoRequest {
    private String title;
    private String content;
    private LocalDateTime startDate;
    private String type;
}
