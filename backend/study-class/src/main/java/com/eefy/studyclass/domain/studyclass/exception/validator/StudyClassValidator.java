package com.eefy.studyclass.domain.studyclass.exception.validator;

import com.eefy.studyclass.domain.member.exception.message.MemberEnum;
import com.eefy.studyclass.domain.member.persistence.entity.Member;
import com.eefy.studyclass.domain.studyclass.exception.message.StudyClassEnum;
import com.eefy.studyclass.domain.studyclass.persistence.entity.Notice;
import com.eefy.studyclass.domain.studyclass.persistence.entity.Participate;
import com.eefy.studyclass.domain.studyclass.persistence.entity.StudyClass;
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
                .code(MemberEnum.UNAUTHORIZED_ABOUT_CREATE_CLASS.getCode())
                .message(MemberEnum.UNAUTHORIZED_ABOUT_CREATE_CLASS.getMessage()).build();
    }

    public StudyClass existsStudyClassByClassId(Optional<StudyClass> optionalStudyClass) {
        if(optionalStudyClass.isEmpty()) throw CustomException.builder()
                .status(HttpStatus.BAD_REQUEST)
                .code(StudyClassEnum.NO_EXIST_STUDY_CLASS_BY_TEACHER.getCode())
                .message(StudyClassEnum.NO_EXIST_STUDY_CLASS_BY_TEACHER.getMessage())
                .build();

        return optionalStudyClass.get();
    }

    public void alreadyJoinStudyClass(Optional<Participate> participate) {
        if(participate.isPresent()) throw CustomException.builder()
                .status(HttpStatus.ACCEPTED)
                .code(StudyClassEnum.ALREADY_PARTICIPATE_STUDY_CLASS.getCode())
                .message(StudyClassEnum.ALREADY_PARTICIPATE_STUDY_CLASS.getMessage())
                .build();
    }

    public Participate alreadyUnJoinStudyClass(Optional<Participate> participate) {
        if(participate.isEmpty()) throw CustomException.builder()
                .status(HttpStatus.ACCEPTED)
                .code(StudyClassEnum.ALREADY_UNPARTICIPATE_STUDY_CLASS.getCode())
                .message(StudyClassEnum.ALREADY_UNPARTICIPATE_STUDY_CLASS.getMessage())
                .build();
        return participate.get();
    }

    public void checkUserRoleEnrollHomework(Integer teacherId, StudyClass studyClass) {
        if(studyClass.getMemberId() != teacherId) throw CustomException.builder()
                .status(HttpStatus.BAD_REQUEST)
                .code(StudyClassEnum.UNAUTHORIZED_ABOUT_ENROLL_HOMEWORK.getCode())
                .message(StudyClassEnum.UNAUTHORIZED_ABOUT_ENROLL_HOMEWORK.getMessage())
                .build();
    }

    public void checkAuthorityStudyClass(StudyClass studyClass, Integer teacherId) {
        if(studyClass.getMemberId() != teacherId) throw CustomException.builder()
                .status(HttpStatus.BAD_REQUEST)
                .code(StudyClassEnum.NO_EXIST_STUDY_CLASS_BY_TEACHER_AND_CLASS.getCode())
                .message(StudyClassEnum.NO_EXIST_STUDY_CLASS_BY_TEACHER_AND_CLASS.getMessage())
                .build();
    }

    public Notice existNoticeById(Optional<Notice> optionalNotice) {
        if(optionalNotice.isEmpty()) throw CustomException.builder()
                .status(HttpStatus.BAD_REQUEST)
                .code(StudyClassEnum.NO_EXIST_STUDY_CLASS_BY_ID.getCode())
                .message(StudyClassEnum.NO_EXIST_STUDY_CLASS_BY_TEACHER_AND_CLASS.getMessage())
                .build();

        return optionalNotice.get();
    }
}
