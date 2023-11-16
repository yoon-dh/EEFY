package com.eefy.member.domain.member.exception.handler;

import com.eefy.member.domain.member.exception.EmailCodeException;
import com.eefy.member.domain.member.exception.JwtCustomException;
import com.eefy.member.global.exception.ExceptionResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class AuthControllerAdvice {

    @ExceptionHandler(JwtCustomException.class)
    private ResponseEntity<ExceptionResponseDto> jwtException(JwtCustomException e) {
        log.error(e.getMessage());
        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(ExceptionResponseDto.builder()
                        .status(HttpStatus.UNAUTHORIZED)
                        .code(e.getErrorEnum().getCode())
                        .message(e.getErrorEnum().getMessage())
                        .build());
    }

    @ExceptionHandler(EmailCodeException.class)
    private ResponseEntity<ExceptionResponseDto> jwtException(EmailCodeException e) {
        log.error(e.getMessage());
        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(ExceptionResponseDto.builder()
                        .status(HttpStatus.UNAUTHORIZED)
                        .code(e.getErrorEnum().getCode())
                        .message(e.getErrorEnum().getMessage())
                        .build());
    }
}
