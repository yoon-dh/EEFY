package com.eefy.studyclass.domain.studyclass.dto.request;

import java.time.LocalDateTime;
import java.util.List;

public class StudyClassCreateRequest {
    private String title;
    private String content;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String type;
    private List<StudyClassStudentRequest> students;
}
