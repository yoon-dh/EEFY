package com.eefy.homework.domain.homework.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EvaluateAnnounceRequest {

    private String voice_file_path;
    private String script;
}
