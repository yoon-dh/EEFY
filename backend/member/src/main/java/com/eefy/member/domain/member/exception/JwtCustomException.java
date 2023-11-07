package com.eefy.member.domain.member.exception;

import com.eefy.member.domain.member.exception.message.JwtErrorEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class JwtCustomException extends RuntimeException {
    private JwtErrorEnum errorEnum;
}
