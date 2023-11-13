package com.eefy.studyclass.domain.lecture.persistence.entity;

import com.eefy.studyclass.domain.lecture.dto.request.CanvasData;

import java.util.List;
import java.util.stream.Collectors;

public class PageInfo {
    private Integer pageNum;
    private List<DrawInfo> drawInfo;

    public PageInfo(CanvasData canvasData) {
        this.pageNum = canvasData.getPageNum();

    }

//    public PageInfo(CanvasData canvasData) {
//        this.pageNum = canvasData.getPageNum();
//        this.drawInfo = canvasData.getDrawInfo().stream().map(drawInfo -> new DrawInfo(drawInfo)).collect(Collectors.toList());
//    }
}
