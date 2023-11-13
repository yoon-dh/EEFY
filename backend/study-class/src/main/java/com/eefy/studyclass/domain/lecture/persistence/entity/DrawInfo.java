package com.eefy.studyclass.domain.lecture.persistence.entity;

import com.eefy.studyclass.domain.lecture.dto.request.DrawInfoRequest;

import java.util.List;
import java.util.stream.Collectors;

public class DrawInfo {
    private boolean drawMode;
    private String strokeColor;
    private List<Path> paths;

    public DrawInfo(DrawInfoRequest drawInfo) {
        this.drawMode = drawInfo.isDrawMode();
        this.strokeColor = drawInfo.getStrokeColor();
        this.paths = drawInfo.getPaths().stream().map(path -> new Path(path)).collect(Collectors.toList());
    }
}
