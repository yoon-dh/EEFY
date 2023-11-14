package com.eefy.studyclass.domain.lecture.persistence.entity;

import com.eefy.studyclass.domain.lecture.dto.request.NoteInfoRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Document(collection = "LectureNoteInfos")
@Getter
public class LectureNoteInfo {
    private String _id;
    private Integer lectureId;
    private Integer memberId;
    private List<CanvasData> canvasData;

    public LectureNoteInfo(Integer memberId, NoteInfoRequest noteInfoRequest) {
        this.memberId = memberId;
        this.lectureId = noteInfoRequest.getLectureId();
        this.canvasData = noteInfoRequest.getCanvasData().stream().map(canvasData -> new CanvasData(canvasData)).collect(Collectors.toList());
    }
}
