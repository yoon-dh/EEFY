package com.eefy.homework.domain.homework.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AlarmSendRequest {

    private Integer classId;
    private String link;
    private String className;
    private String title;
    private String content;

}
