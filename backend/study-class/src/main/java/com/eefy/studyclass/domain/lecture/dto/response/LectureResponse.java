package com.eefy.studyclass.domain.lecture.dto.response;


import com.eefy.studyclass.domain.lecture.persistence.entity.Lecture;
import lombok.Getter;

@Getter
public class LectureResponse {
    private Integer id;
    private String title;
    private String content;

    public LectureResponse(Lecture lecture) {
        this.id = lecture.getId();
        this.title = lecture.getTitle();
        this.content = lecture.getContent();
    }
}
