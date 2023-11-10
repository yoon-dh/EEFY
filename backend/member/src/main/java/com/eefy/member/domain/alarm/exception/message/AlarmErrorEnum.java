package com.eefy.member.domain.alarm.exception.message;

import lombok.Getter;

@Getter
public enum AlarmErrorEnum {
    FAILED_SEND_MESSAGE_WITH_CLIENT(1400, "푸시 알림 전송 실패 - 요청 인자를 확인해주세요: "),
    FAILED_SEND_MESSAGE_WITH_SERVER(1401, "푸시 알림 전송 실패- POST 요청 과정에서 에러가 발생했습니다: "),
    FAILED_SUBSCRIBE_TOPIC(1402, "클래스 토픽 구독에 실패했습니다: ");
    private final int code;
    private final String message;

    AlarmErrorEnum(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
