package com.eefy.studyclass.domain.question.dto.request;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@Builder
public class QuestionWriteRequest {
    private Integer classId;
    private String title;
    private String content;
}

