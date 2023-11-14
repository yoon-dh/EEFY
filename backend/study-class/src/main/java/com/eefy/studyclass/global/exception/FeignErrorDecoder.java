package com.eefy.studyclass.global.exception;

import feign.Response;
import feign.codec.ErrorDecoder;
import org.springframework.http.HttpStatus;

public class FeignErrorDecoder implements ErrorDecoder {

    private final ErrorDecoder defaultErrorDecoder = new Default();

    @Override
    public Exception decode(String methodKey, Response response) {
        if (response.status() >= 400 && response.status() <= 599) {
            throw CustomException
                    .builder()
                    .status(HttpStatus.NOT_FOUND)
                    .code(1500)
                    .message("외부 서비스에서 오류 발생")
                    .build();
        }
        return defaultErrorDecoder.decode(methodKey, response);
    }
}
