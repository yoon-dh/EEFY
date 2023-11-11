package com.eefy.studyclass.domain.question.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@Builder
public class AnswerWriteRequest {
    private int questionAnswerId;
    private int memberId;
    private String name;
    private String nickname;
    private String content;
    private String role;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}

