package com.eefy.studyclass.domain.lecture.persistence.entity;

import com.eefy.studyclass.domain.lecture.dto.request.CanvasData;
import com.eefy.studyclass.domain.lecture.dto.request.NoteInfoRequest;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.List;
import java.util.stream.Collectors;

@Document(collection = "LectureNoteInfos")
public class LectureNoteInfo {
    @Id
    private String _id;
    private Integer lectureId;
    private Integer memberId;
    private List<PageInfo> pageInfo;

    public LectureNoteInfo(Integer memberId, NoteInfoRequest noteInfoRequest) {
        this.memberId = memberId;
        this.lectureId = noteInfoRequest.getLectureId();
        this.pageInfo = noteInfoRequest.getCanvasData().stream().map(canvasData -> new PageInfo(canvasData)).collect(Collectors.toList());
    }

//    public LectureNoteInfo(Integer memberId, Integer lectureId, CanvasData canvasData) {
//        this.lectureId = lectureId;
//        this.memberId = memberId;
//        this.pageInfo = new PageInfo(canvasData);
//    }
}
