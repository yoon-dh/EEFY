package com.eefy.member.domain.alarm.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDateTime;

@ToString
@Getter
@AllArgsConstructor
@Builder
public class SavedMessageResponse implements Comparable<SavedMessageResponse> {
    private String messageId;
    private int classId;
    private String link;
    private String className;
    private String title;
    private String content;
    private LocalDateTime createdAt;

    @Override
    public int compareTo(SavedMessageResponse o) {
        return o.createdAt.compareTo(createdAt);
    }
}
