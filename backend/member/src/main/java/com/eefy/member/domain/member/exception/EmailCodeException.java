package com.eefy.member.domain.member.exception;

import com.eefy.member.domain.member.exception.message.EmailErrorEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class EmailCodeException extends RuntimeException {
    private EmailErrorEnum errorEnum;
}
