package com.eefy.studyclass.domain.question.service;

import com.eefy.studyclass.domain.question.dto.request.AnswerModifyRequest;
import com.eefy.studyclass.domain.question.dto.request.AnswerWriteRequest;
import com.eefy.studyclass.domain.question.dto.request.QuestionModifyRequest;
import com.eefy.studyclass.domain.question.dto.request.QuestionWriteRequest;
import com.eefy.studyclass.domain.question.dto.response.AnswerListResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionDetailResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionListResponse;
import com.eefy.studyclass.domain.studyclass.dto.response.QuestionIdResponse;

import java.util.List;

public interface QuestionService {
    List<QuestionListResponse> getQuestionList(int memberId, int classId);
    QuestionDetailResponse getQuestionDetail(int memberId, int questionId);
    void deleteQuestion(int memberId, int questionId);
    QuestionIdResponse writeQuestion(int memberId, QuestionWriteRequest request);
    List<AnswerListResponse> getAnswerlist(int memberId, int questionId);
    void writeAnswer(int memberId, AnswerWriteRequest request);
    void updateAnswer(int memberId, AnswerModifyRequest request);
    void updateQuestion(int memberId, QuestionModifyRequest request);
    void deleteAnswer(int memberId, int commentId);
    void updateQuestionStatus(int memberId, int questionId);
}

