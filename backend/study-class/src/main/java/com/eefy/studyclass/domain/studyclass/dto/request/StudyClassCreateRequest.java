package com.eefy.studyclass.domain.studyclass.dto.request;

import com.eefy.studyclass.domain.studyclass.persistence.entity.enums.StudyTypeEnum;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class StudyClassCreateRequest {
    private String title;
    private String content;
    private LocalDateTime startDate;
    private StudyTypeEnum type;
}
