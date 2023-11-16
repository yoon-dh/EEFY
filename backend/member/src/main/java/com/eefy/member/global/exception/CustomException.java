package com.eefy.member.global.exception;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
@Builder
public class CustomException extends RuntimeException {
    private HttpStatus status;
    private int code;
    private String message;
}
