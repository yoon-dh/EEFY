package com.eefy.homework.global;

import feign.Response;
import feign.codec.ErrorDecoder;

public class FeignErrorDecoder implements ErrorDecoder {
    @Override
    public Exception decode(String methodKey, Response response) {
        switch (response.status()) {
            case 400:
                return new RuntimeException("내부 통신 오류");
            case 404:
                return new RuntimeException();
            default:
                return new Exception("Generic error message");
        }
    }
}
