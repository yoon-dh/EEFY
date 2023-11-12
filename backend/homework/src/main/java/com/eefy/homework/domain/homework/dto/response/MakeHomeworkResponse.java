package com.eefy.homework.domain.homework.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class MakeHomeworkResponse {

    private Integer homeworkId;
}
