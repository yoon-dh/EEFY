package com.eefy.studyclass.domain.question.exception.validator;

import com.eefy.studyclass.domain.question.exception.message.QuestionEnum;
import com.eefy.studyclass.domain.question.persistence.entity.QnaQuestion;
import com.eefy.studyclass.global.exception.CustomException;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.Optional;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Component
public class QnaValidator {
    public QnaQuestion checkExistQuestion(Optional<QnaQuestion> optionalQuestion) {
        if(optionalQuestion.isEmpty()) throw CustomException.builder()
                .status(HttpStatus.BAD_REQUEST)
                .code(QuestionEnum.NO_EXIST_QUESTION_BY_ID.getCode())
                .message(QuestionEnum.NO_EXIST_QUESTION_BY_ID.getMessage())
                .build();

        return optionalQuestion.get();
    }
}
