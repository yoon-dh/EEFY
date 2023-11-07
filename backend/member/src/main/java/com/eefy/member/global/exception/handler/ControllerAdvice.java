package com.eefy.member.global.exception.handler;

import com.eefy.member.global.exception.CustomException;
import com.eefy.member.global.exception.ExceptionResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class ControllerAdvice {

    @ExceptionHandler(CustomException.class)
    private ResponseEntity<ExceptionResponseDto> exception(CustomException e) {
        log.error(e.getMessage());
        return ResponseEntity
                .status(e.getStatus())
                .body(ExceptionResponseDto.builder()
                        .status(e.getStatus())
                        .code(e.getCode())
                        .message(e.getMessage())
                        .build());
    }
}
