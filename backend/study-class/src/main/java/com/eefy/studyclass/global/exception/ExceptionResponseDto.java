package com.eefy.studyclass.global.exception;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class ExceptionResponseDto {
    private int errorCode;
    private String errorMessage;
}
