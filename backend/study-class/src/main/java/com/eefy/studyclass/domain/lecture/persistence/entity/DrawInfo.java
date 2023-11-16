package com.eefy.studyclass.domain.lecture.persistence.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class DrawInfo {
    private boolean drawMode;
    private String strokeColor;
    private Double strokeWidth;
    private List<Path> paths;

    public DrawInfo(DrawInfo drawInfo) {
        this.drawMode = drawInfo.drawMode;
        this.strokeColor = drawInfo.getStrokeColor();
        this.strokeWidth = drawInfo.getStrokeWidth();
        this.paths = drawInfo.getPaths().stream().map(path -> new Path(path)).collect(Collectors.toList());
    }
}
