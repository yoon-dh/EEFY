package com.eefy.studyclass.domain.question.service;

import com.eefy.studyclass.domain.member.persistence.entity.Member;
import com.eefy.studyclass.domain.member.service.MemberService;
import com.eefy.studyclass.domain.question.dto.request.AnswerWriteRequest;
import com.eefy.studyclass.domain.question.dto.request.QuestionWriteRequest;
import com.eefy.studyclass.domain.question.dto.response.AnswerWriteResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionDetailResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionListResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionWriteResponse;
import com.eefy.studyclass.domain.question.exception.validator.QnaValidator;
import com.eefy.studyclass.domain.question.persistence.entity.QnaAnswer;
import com.eefy.studyclass.domain.question.persistence.entity.QnaQuestion;
import com.eefy.studyclass.domain.question.persistence.mysql.QnaAnswerRepository;
import com.eefy.studyclass.domain.question.persistence.mysql.QnaQuestionRepository;
import com.eefy.studyclass.domain.studyclass.exception.validator.StudyClassValidator;
import com.eefy.studyclass.domain.studyclass.persistence.entity.StudyClass;
import com.eefy.studyclass.domain.studyclass.persistence.mysql.StudyClassRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {

    private final QnaQuestionRepository qnaQuestionRepository;
    private final StudyClassRepository studyClassRepository;
    private final QnaAnswerRepository qnaAnswerRepository;
    private final MemberService memberService;
    private final StudyClassValidator studyClassValidator;
    private final QnaValidator qnaValidator;
    @Override
    public List<QuestionListResponse> getQuestionList(int memberId, int classId) {
        Member member = memberService.getMemberInfo(memberId, memberId);

        if (member.getRole().equals("TEACHER")) {
            return makeQuestionListResponse(classId);
        }
        return makeQuestionListResponse(member, classId);
    }

    @Override
    public QuestionDetailResponse getQuestionDetail(int questionId) {
//        QnaQuestion question = qnaQuestionRepository.findByIdWithMember(questionId)
//                .orElseThrow(() -> new IllegalArgumentException("QnA 조회 실패: 등록된 QnA가 존재하지 않습니다."));
//        return new QuestionDetailResponse(question);
        return null;
    }

    @Override
    public void updateQuestion(int questionId) {

    }

    @Override
    public void deleteQuestion(int questionId) {

    }

    @Override
    public void updateAnswer(int answerId) {

    }

    @Override
    public QuestionWriteResponse writeQuestion(int memberId, QuestionWriteRequest request) {
        Member member = memberService.getMemberInfo(memberId, memberId);
        StudyClass studyClass = studyClassValidator.existsStudyClassByClassId(studyClassRepository.findById(request.getClassId()));

        QnaQuestion question = QnaQuestion.builder()
                .memberId(member.getMemberId())
                .studyClass(studyClass)
                .title(request.getTitle())
                .content(request.getContent())
                .build();

        qnaQuestionRepository.save(question);

        return makeQuestionWriteResponse(question);
    }

    @Override
    public AnswerWriteResponse writeAnswer(int memberId, int questionId, AnswerWriteRequest request) {
        QnaQuestion qnaQuestion = qnaValidator.checkExistQuestion(qnaQuestionRepository.findById(request.getQuestionId()));

        QnaAnswer answer = QnaAnswer.builder()
                .question(qnaQuestion)
                .memberId(memberId)
                .content(request.getContent()).build();

        qnaAnswerRepository.save(answer);

        return null;
    }

    private List<QuestionListResponse> makeQuestionListResponse(int classId) {
        List<QnaQuestion> questions = qnaQuestionRepository.findByStudyClassId(classId);
        return questions.stream().map(QuestionListResponse::new).collect(Collectors.toList());
    }

    private List<QuestionListResponse> makeQuestionListResponse(Member member, int classId) {
        List<QnaQuestion> questions = qnaQuestionRepository.findByMemberIdAndStudyClassId(member, classId);
        return questions.stream().map(QuestionListResponse::new).collect(Collectors.toList());
    }

    private QuestionWriteResponse makeQuestionWriteResponse(QnaQuestion question) {
        return QuestionWriteResponse.builder()
                .questionId(question.getId())
                .title(question.getTitle())
                .content(question.getContent())
                .createdAt(question.getCreatedAt())
                .modifiedAt(question.getUpdatedAt())
                .build();
    }
}
