package com.eefy.studyclass.domain.lecture.dto.response;

import lombok.Getter;

import java.util.List;

@Getter
public class DrawInfoResponse {
    private boolean drawMode;
    private String strokeColor;
    private double strokeWidth;
    private List<PathResponse> paths;
}
