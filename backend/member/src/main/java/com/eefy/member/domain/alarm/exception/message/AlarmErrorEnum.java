package com.eefy.member.domain.alarm.exception.message;

import lombok.Getter;

@Getter
public enum AlarmErrorEnum {
    NOT_MATCH_MEMBER_COUNT(1400, "회원 조회 오류: 요청한 토픽 구독자 수와 조회된 회원 수가 일치하지 않습니다."),
    FAILED_SEND_MESSAGE_WITH_SERVER(1401, "푸시 알림 전송 실패- POST 요청 과정에서 에러가 발생했습니다: "),
    FAILED_SUBSCRIBE_TOPIC(1402, "클래스 토픽 구독에 실패했습니다: "),
    EMPTY_SAVED_MESSAGE(1403, "보관된 알림 메세지가 없습니다."),
    ALARM_NOT_EXIST(1404, "알림이 존재하지 않습니다.");

    private final int code;
    private final String message;

    AlarmErrorEnum(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
