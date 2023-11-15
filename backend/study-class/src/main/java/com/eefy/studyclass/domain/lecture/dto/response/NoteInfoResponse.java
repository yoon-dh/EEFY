package com.eefy.studyclass.domain.lecture.dto.response;

import com.eefy.studyclass.domain.lecture.persistence.entity.DrawInfo;
import lombok.Getter;

import java.util.List;

@Getter
public class NoteInfoResponse {
    private List<DrawInfo> drawInfo;

    public NoteInfoResponse(List<DrawInfo> lectureNoteInfo) {
        this.drawInfo = lectureNoteInfo;
    }
}
