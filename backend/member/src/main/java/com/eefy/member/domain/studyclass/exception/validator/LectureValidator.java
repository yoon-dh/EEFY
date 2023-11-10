package com.eefy.member.domain.studyclass.exception.validator;

import com.eefy.member.domain.member.persistence.entity.Lecture;
import com.eefy.member.domain.studyclass.exception.message.LectureEnum;
import com.eefy.member.global.exception.CustomException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class LectureValidator {

    public Lecture existLecture(Optional<Lecture> lecture) {
        if(lecture.isEmpty()) throw CustomException.builder()
                .status(HttpStatus.BAD_REQUEST)
                .code(LectureEnum.UNAUTHORIZED_MAKE_LECTURE.getCode())
                .message(LectureEnum.UNAUTHORIZED_MAKE_LECTURE.getMessage()).build();

        return lecture.get();
    }
}
