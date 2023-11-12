package com.eefy.studyclass.domain.question.exception.validator;

import com.eefy.studyclass.domain.member.persistence.entity.Member;
import com.eefy.studyclass.domain.question.exception.message.AnswerEnum;
import com.eefy.studyclass.domain.question.exception.message.QuestionEnum;
import com.eefy.studyclass.domain.question.persistence.entity.QnaAnswer;
import com.eefy.studyclass.domain.question.persistence.entity.QnaQuestion;
import com.eefy.studyclass.global.exception.CustomException;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Slf4j
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

    public void checkEqualQuestionWriter(QnaQuestion qnaQuestion, int memberId) {
        if(qnaQuestion.getMemberId() != memberId) throw CustomException.builder()
                .status(HttpStatus.BAD_REQUEST)
                .code(QuestionEnum.UNAUTHORIZED_QUESTION_WRITER.getCode())
                .message(QuestionEnum.UNAUTHORIZED_QUESTION_WRITER.getMessage())
                .build();
    }

    public QnaAnswer checkExistAnswer(Optional<QnaAnswer> optionalQnaAnswer) {
        if(optionalQnaAnswer.isEmpty()) throw CustomException.builder()
                .status(HttpStatus.BAD_REQUEST)
                .code(AnswerEnum.NO_EXIST_ANSWER_BY_ID.getCode())
                .message(AnswerEnum.NO_EXIST_ANSWER_BY_ID.getMessage())
                .build();
        return optionalQnaAnswer.get();
    }

    public void checkEqualAnswerWriter(QnaAnswer qnaAnswer, int memberId) {
        if(qnaAnswer.getMemberId() != memberId) throw CustomException.builder()
                .status(HttpStatus.BAD_REQUEST)
                .code(AnswerEnum.UNAUTHORIZED_ANSWER_WRITER.getCode())
                .message(AnswerEnum.UNAUTHORIZED_ANSWER_WRITER.getMessage())
                .build();
    }

    public void checkAuthorizationQuestion(QnaQuestion qnaQuestion, Member member) {
        log.info(">> question MemberId: " + qnaQuestion.getMemberId() + ", memberId: " + member.getMemberId() + " " + member.getRole().equals("TEACHER"));
        if(!member.getRole().equals("TEACHER") || qnaQuestion.getMemberId() != member.getMemberId()) throw CustomException.builder()
                .status(HttpStatus.BAD_REQUEST)
                .code(QuestionEnum.UNAUTHORIZED_ACCESS_QUESTION.getCode())
                .message(QuestionEnum.UNAUTHORIZED_ACCESS_QUESTION.getMessage())
                .build();
    }
}
