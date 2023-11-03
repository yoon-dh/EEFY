package com.eefy.homework.domain.homework.dto.request;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class ChoiceRequest {

    private Integer homeworkQuestionId;
    private String content;
    private String number;
}
