package com.eefy.studyclass.domain.lecture.persistence.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@ToString
@NoArgsConstructor
public class CanvasData {
    private Integer pageNum;
    private List<DrawInfo> drawInfo;

    public CanvasData(CanvasData canvasData) {
        this.pageNum = canvasData.getPageNum();
        this.drawInfo = canvasData.getDrawInfo().stream().map(drawInfo -> new DrawInfo(drawInfo)).collect(Collectors.toList());
    }
}
