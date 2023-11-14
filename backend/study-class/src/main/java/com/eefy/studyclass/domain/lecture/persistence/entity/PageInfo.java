package com.eefy.studyclass.domain.lecture.persistence.entity;

import lombok.Getter;

import java.util.List;

@Getter
public class PageInfo {
    private Integer pageNum;
    private List<DrawInfo> drawInfo;

    public PageInfo(CanvasData canvasData) {
        this.pageNum = canvasData.getPageNum();

    }
}
