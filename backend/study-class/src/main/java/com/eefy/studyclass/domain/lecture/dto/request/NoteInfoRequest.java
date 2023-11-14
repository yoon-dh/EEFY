package com.eefy.studyclass.domain.lecture.dto.request;

import com.eefy.studyclass.domain.lecture.persistence.entity.CanvasData;
import lombok.Getter;
import lombok.ToString;

import java.util.ArrayList;

@Getter
@ToString
public class NoteInfoRequest {
    private Integer lectureId;
    private ArrayList<CanvasData> canvasData;
}
