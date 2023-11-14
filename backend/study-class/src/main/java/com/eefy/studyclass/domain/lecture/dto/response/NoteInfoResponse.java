package com.eefy.studyclass.domain.lecture.dto.response;

import com.eefy.studyclass.domain.lecture.persistence.entity.DrawInfo;
import com.eefy.studyclass.domain.lecture.persistence.entity.Lecture;
import lombok.Getter;

import java.util.List;

@Getter
public class NoteInfoResponse {
    private String filePath;
    private List<DrawInfo> drawInfo;

    public NoteInfoResponse(Lecture lecture, List<DrawInfo> lectureNoteInfo) {
        this.filePath = lecture.getFilePath();
        this.drawInfo = lectureNoteInfo;
    }
}
