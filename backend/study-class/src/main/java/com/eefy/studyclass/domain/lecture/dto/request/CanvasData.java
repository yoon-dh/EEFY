package com.eefy.studyclass.domain.lecture.dto.request;

import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Getter
@ToString
public class CanvasData {
    private Integer pageNum;
    private List<DrawInfoRequest> drawInfo;
}
