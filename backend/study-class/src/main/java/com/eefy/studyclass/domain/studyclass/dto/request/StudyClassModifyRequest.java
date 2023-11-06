package com.eefy.studyclass.domain.studyclass.dto.request;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class StudyClassModifyRequest {
    private Integer id;
    private String title;
    private String content;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String type;
    private List<StudyClassStudentRequest> students;

    @Builder
    public StudyClassModifyRequest(Integer id, String title, String content, LocalDateTime startDate, LocalDateTime endDate, String type, List<StudyClassStudentRequest> students) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
        this.students = students;
    }
}
