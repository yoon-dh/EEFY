package com.eefy.studyclass.domain.studyclass.dto.response;


import com.eefy.studyclass.domain.studyclass.persistence.entity.StudyClass;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class StudyClassResponse {
    private Integer id;
    private Integer studentCnt;
    private String title;
    private String teacher;

    public static StudyClassResponse of(StudyClass studyClass, String teacherName) {
        return StudyClassResponse.builder()
                .id(studyClass.getId())
                .studentCnt(studyClass.getStudentCnt())
                .title(studyClass.getClassTitle())
                .teacher(teacherName).build();
    }
}
