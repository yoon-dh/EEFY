package com.eefy.studyclass.domain.studyclass.dto.response;


import com.eefy.studyclass.domain.member.persistence.entity.Member;
import com.eefy.studyclass.domain.studyclass.persistence.entity.StudyClass;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class StudyClassResponse {
    private Integer id;
    private Integer studentCnt;
    private String title;
    private String content;
    private String teacherName;
    private String teacherNickname;
    private String teacherProfileImagePath;

    public static StudyClassResponse of(StudyClass studyClass, Member teacher) {
        return StudyClassResponse.builder()
                .id(studyClass.getId())
                .studentCnt(studyClass.getStudentCnt())
                .title(studyClass.getTitle())
                .content(studyClass.getContent())
                .teacherName(teacher.getName())
                .teacherProfileImagePath(teacher.getProfileImagePath())
                .teacherNickname(teacher.getNickname()).build();
    }
}
