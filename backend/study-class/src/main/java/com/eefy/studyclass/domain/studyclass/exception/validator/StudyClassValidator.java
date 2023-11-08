package com.eefy.studyclass.domain.studyclass.exception.validator;

import com.eefy.studyclass.domain.member.persistence.entity.Member;
import com.eefy.studyclass.domain.studyclass.exception.message.StudyClassEnum;
import com.eefy.studyclass.domain.studyclass.persistence.entity.Participate;
import com.eefy.studyclass.domain.studyclass.persistence.mysql.StudyClassRepository;
import com.eefy.studyclass.global.exception.CustomException;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.Optional;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Component
public class StudyClassValidator {
    public void checkUserRoleCreateStudyClass(Member member) {
        if(!member.getRole().equals("TEACHER")) throw CustomException.builder()
                .status(HttpStatus.UNAUTHORIZED)
                .code(StudyClassEnum.NO_UNAUTHORIZED_ABOUT_CREATE_CLASS.getCode())
                .message(StudyClassEnum.NO_UNAUTHORIZED_ABOUT_CREATE_CLASS.getMessage()).build();
    }

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

    public void alreadyJoinStudyClass(Optional<Participate> participate) {
        if(participate.isPresent()) throw CustomException.builder()
                .status(HttpStatus.ACCEPTED)
                .code(StudyClassEnum.ALREADY_PARTICIPATE_STUDY_CLASS.getCode())
                .message(StudyClassEnum.ALREADY_PARTICIPATE_STUDY_CLASS.getMessage())
                .build();
    }

    public void alreadyUnJoinStudyClass(Optional<Participate> participate) {
        if(participate.isEmpty()) throw CustomException.builder()
                .status(HttpStatus.ACCEPTED)
                .code(StudyClassEnum.ALREADY_UNPARTICIPATE_STUDY_CLASS.getCode())
                .message(StudyClassEnum.ALREADY_UNPARTICIPATE_STUDY_CLASS.getMessage())
                .build();
    }
}
