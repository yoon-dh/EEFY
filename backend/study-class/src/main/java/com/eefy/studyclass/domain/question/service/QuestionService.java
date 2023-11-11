package com.eefy.studyclass.domain.question.service;


import com.eefy.studyclass.domain.question.dto.request.AnswerWriteRequest;
import com.eefy.studyclass.domain.question.dto.request.QuestionWriteRequest;
import com.eefy.studyclass.domain.question.dto.response.AnswerWriteResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionDetailResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionListResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionWriteResponse;

import java.util.List;

public interface QuestionService {
    List<QuestionListResponse> getQuestionList(int memberId, int classId);
    QuestionDetailResponse getQuestionDetail(int questionId);
    void updateQuestion(int questionId);
    void deleteQuestion(int questionId);
    void updateAnswer(int answerId);

    QuestionWriteResponse writeQuestion(int memberId, QuestionWriteRequest request);
    AnswerWriteResponse writeAnswer(int memberId, AnswerWriteRequest request);
}

