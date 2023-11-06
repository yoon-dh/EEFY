package com.eefy.studyclass.global.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerAdvice {
    @ExceptionHandler(CustomException.class)
    private ResponseEntity<ExceptionResponseDto> NoExistStudyClass(CustomException e) {
        return ResponseEntity
                .status(e.getStatus()).body(ExceptionResponseDto.builder()
                .errorCode(e.getCode())
                .errorMessage(e.getMessage())
                .build());
    }
}
