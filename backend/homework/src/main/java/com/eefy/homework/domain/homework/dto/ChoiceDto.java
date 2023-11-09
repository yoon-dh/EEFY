package com.eefy.homework.domain.homework.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChoiceDto {

    private String content;
    private String number;

    public static ChoiceDto of(String content, String number) {
        return new ChoiceDto(content, number);
    }
}
