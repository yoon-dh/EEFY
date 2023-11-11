package com.eefy.homework.domain.homework.dto;

import com.eefy.homework.domain.homework.persistence.entity.enums.HomeworkType;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class HomeworkDto {

    private Integer id;
    private Integer memberId;
    private String title;
    private String content;
    private HomeworkType type;
}
