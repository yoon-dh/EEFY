package com.eefy.studyclass.domain.studyclass.exception.validator;

import com.eefy.studyclass.domain.studyclass.exception.message.StudyClassEnum;
import com.eefy.studyclass.domain.studyclass.persistence.mysql.StudyClassRepository;
import com.eefy.studyclass.global.exception.CustomException;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Component
public class StudyClassValidator {
    public void existsStudyClassByClassId(StudyClassRepository studyClassRepository, Integer studyClassId) {
        if(!studyClassRepository.existsById(studyClassId)) throw CustomException.builder()
                .status(HttpStatus.NO_CONTENT)
                .code(StudyClassEnum.NO_EXIST_STUDY_CLASS_BY_ID.getCode())
                .message(StudyClassEnum.NO_EXIST_STUDY_CLASS_BY_ID.getMessage())
                .build();
    }

    public void existsByStudyClassByTeacherIdAndClassId(StudyClassRepository studyClassRepository, Integer classId, Integer teacherId) {
        if(!studyClassRepository.existsByIdAndMemberId(classId, teacherId)) throw CustomException.builder()
                .status(HttpStatus.NO_CONTENT)
                .code(StudyClassEnum.NO_EXIST_STUDY_CLASS_BY_TEACHER_AND_CLASS.getCode())
                .message(StudyClassEnum.NO_EXIST_STUDY_CLASS_BY_TEACHER_AND_CLASS.getMessage())
                .build();
    }

    public void existsByTeacherId(StudyClassRepository studyClassRepository, Integer teacherId) {
        if(!studyClassRepository.existsByMemberId(teacherId)) throw CustomException.builder()
                .status(HttpStatus.NO_CONTENT)
                .code(StudyClassEnum.NO_EXIST_STUDY_CLASS_BY_TEACHER.getCode())
                .message(StudyClassEnum.NO_EXIST_STUDY_CLASS_BY_TEACHER.getMessage())
                .build();
    }
}
