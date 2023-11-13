package com.eefy.studyclass.domain.lecture.dto.request;

import lombok.Getter;

import java.util.List;

@Getter
public class DrawInfoRequest {
    private boolean drawMode;
    private String strokeColor;
    private List<PathRequest> paths;
}
