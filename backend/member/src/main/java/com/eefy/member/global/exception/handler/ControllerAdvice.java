package com.eefy.member.global.exception.handler;

import com.eefy.member.global.exception.CustomException;
import com.eefy.member.global.exception.ExceptionResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerAdvice {

    @ExceptionHandler(CustomException.class)
    private ResponseEntity<ExceptionResponseDto> exception(CustomException e) {
        return ResponseEntity
                .status(e.getStatus())
                .body(ExceptionResponseDto.builder()
                        .status(e.getStatus())
                        .code(e.getCode())
                        .message(e.getMessage())
                        .build());
    }
}
