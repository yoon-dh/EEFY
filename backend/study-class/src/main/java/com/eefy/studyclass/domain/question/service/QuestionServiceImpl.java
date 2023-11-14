package com.eefy.studyclass.domain.question.service;

import com.eefy.studyclass.domain.alarm.dto.request.PushAlarmPersonalRequest;
import com.eefy.studyclass.domain.alarm.service.AlarmService;
import com.eefy.studyclass.domain.member.persistence.entity.Member;
import com.eefy.studyclass.domain.member.service.MemberService;
import com.eefy.studyclass.domain.question.dto.request.AnswerModifyRequest;
import com.eefy.studyclass.domain.question.dto.request.AnswerWriteRequest;
import com.eefy.studyclass.domain.question.dto.request.QuestionModifyRequest;
import com.eefy.studyclass.domain.question.dto.response.AnswerListResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionDetailResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionListResponse;
import com.eefy.studyclass.domain.question.dto.request.QuestionWriteRequest;
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
    private final AlarmService alarmService;
    private final StudyClassValidator studyClassValidator;
    private final QnaValidator qnaValidator;
    @Override
    public List<QuestionListResponse> getQuestionList(int memberId, int classId) {
        Member member = memberService.getMemberInfo(memberId, memberId);

        log.info("===============" + member.getRole() + "===============");

        if (member.getRole().equals("TEACHER")) {
            return makeQuestionListResponse(classId);
        }
        return makeQuestionListResponse(member, classId);
    }

    @Override
    public QuestionDetailResponse getQuestionDetail(int memberId, int questionId) {
        QnaQuestion qnaQuestion = qnaValidator.checkExistQuestion(qnaQuestionRepository.findById(questionId));

        Member member = memberService.getMemberInfo(memberId, memberId);
        qnaValidator.checkAuthorizationQuestion(qnaQuestion, member);

        return new QuestionDetailResponse(qnaQuestion, member);
    }

    @Override
    public void updateQuestion(int memberId, QuestionModifyRequest request) {
        QnaQuestion qnaQuestion = qnaValidator.checkExistQuestion(qnaQuestionRepository.findById(request.getId()));

        qnaValidator.checkEqualQuestionWriter(qnaQuestion, memberId);
        qnaQuestion.updateQnaQuestion(request);
    }

    @Override
    public void deleteAnswer(int memberId, int commentId) {
        QnaAnswer qnaAnswer = qnaValidator.checkExistAnswer(qnaAnswerRepository.findById(commentId));
        qnaValidator.checkEqualAnswerWriter(qnaAnswer, memberId);

        qnaAnswerRepository.delete(qnaAnswer);
    }

    @Override
    public void updateQuestionStatus(int memberId, int questionId) {
        QnaQuestion qnaQuestion = qnaValidator.checkExistQuestion(qnaQuestionRepository.findById(questionId));
        qnaValidator.checkEqualQuestionWriter(qnaQuestion, memberId);

        qnaQuestion.updateQnaStatus();
    }

    @Override
    public void deleteQuestion(int memberId, int questionId) {
        QnaQuestion qnaQuestion = qnaValidator.checkExistQuestion(qnaQuestionRepository.findById(questionId));
        qnaValidator.checkEqualQuestionWriter(qnaQuestion, memberId);

        qnaAnswerRepository.deleteAllByQuestionId(questionId);
        qnaQuestionRepository.delete(qnaQuestion);
    }

    @Override
    public void writeQuestion(int memberId, QuestionWriteRequest request) {
        Member member = memberService.getMemberInfo(memberId, memberId);
        StudyClass studyClass = studyClassValidator.existsStudyClassByClassId(studyClassRepository.findById(request.getClassId()));

        QnaQuestion question = QnaQuestion.builder()
                .memberId(member.getMemberId())
                .studyClass(studyClass)
                .title(request.getTitle())
                .content(request.getContent())
                .build();

        Integer questionId = qnaQuestionRepository.save(question).getId();

        PushAlarmPersonalRequest alarmRequest = PushAlarmPersonalRequest.builder()
                .targetMemberId(studyClass.getMemberId())
                .classId(studyClass.getId())
                .link("https://k9b306.p.ssafy.io/class/" + studyClass.getId() + "/question/" + questionId)
                .className(studyClass.getTitle())
                .title("질문 등록")
                .content(member.getName() + "학생이 " + studyClass.getTitle() + "강좌에 질문을 등록하였습니다.")
                .build();

        alarmService.pushAlarmToPersonal(memberId, alarmRequest);

    }

    @Override
    public List<AnswerListResponse> getAnswerlist(int memberId, int questionId) {
        QnaQuestion qnaQuestion = qnaValidator.checkExistQuestion(qnaQuestionRepository.findById(questionId));

        Member member = memberService.getMemberInfo(memberId, memberId);
        qnaValidator.checkAuthorizationQuestion(qnaQuestion, member);

        List<QnaAnswer> qnaAnswerList = qnaAnswerRepository.findByQuestionIdOrderByCreatedAtDesc(questionId);

        return qnaAnswerList.stream().map(qnaAnswer ->
            new AnswerListResponse(qnaAnswer, memberService.getMemberInfo(memberId, memberId))).collect(Collectors.toList());
    }

    @Override
    public void writeAnswer(int memberId, AnswerWriteRequest request) {
        QnaQuestion qnaQuestion = qnaValidator.checkExistQuestion(qnaQuestionRepository.findById(request.getId()));

        QnaAnswer answer = QnaAnswer.builder()
                .question(qnaQuestion)
                .memberId(memberId)
                .content(request.getContent()).build();

        Member member = memberService.getMemberInfo(memberId, memberId); // 작성자
        PushAlarmPersonalRequest pushAlarmPersonalRequest = pushAlarmWriteAnswer(qnaQuestion, answer, member);

        alarmService.pushAlarmToPersonal(memberId, pushAlarmPersonalRequest);
        qnaAnswerRepository.save(answer);
    }

    private PushAlarmPersonalRequest pushAlarmWriteAnswer(QnaQuestion qnaQuestion, QnaAnswer answer, Member member) {

        int studyId = qnaQuestion.getStudyClass().getId();
        String studyTitle = qnaQuestion.getStudyClass().getTitle();
        int targetId = 0;
        String link = "https://k9b306.p.ssafy.io/class/" + studyId + "/question/" + qnaQuestion.getId();
        String title = "";
        String content = "";

        if(member.getRole().equals("TEACHER")) {
            targetId = qnaQuestion.getMemberId();
            title = qnaQuestion.getTitle() + "답변 등록";
            content = member.getNickname() + "강사님이 " + qnaQuestion.getTitle() + "에 대한 답변을 등록했습니다.";
        }
        else {
            Member teacher = memberService.getMemberInfo(member.getMemberId(), qnaQuestion.getStudyClass().getMemberId());

            // To do: 선생님한테 알람 가게 하기
            targetId = teacher.getMemberId();
            title = qnaQuestion.getTitle() + "답글 등록";
            content = member.getName() + "학생이(가)" + qnaQuestion.getTitle() + "에 대한 답글을 작성했습니다.";

        }

        return PushAlarmPersonalRequest.builder()
                .targetMemberId(targetId)
                .classId(studyId)
                .link(link)
                .className(studyTitle)
                .title(title)
                .content(content).build();
    }

    @Override
    public void updateAnswer(int memberId, AnswerModifyRequest request) {
        QnaAnswer qnaAnswer = qnaValidator.checkExistAnswer(qnaAnswerRepository.findById(request.getId()));

        qnaValidator.checkEqualAnswerWriter(qnaAnswer, memberId);

        qnaAnswer.updateQnaAnswerInfo(request);
    }

    private List<QuestionListResponse> makeQuestionListResponse(int classId) {
        List<QnaQuestion> questions = qnaQuestionRepository.findByStudyClassId(classId);
        return questions.stream().map(QuestionListResponse::new).collect(Collectors.toList());
    }

    private List<QuestionListResponse> makeQuestionListResponse(Member member, int classId) {
        List<QnaQuestion> questions = qnaQuestionRepository.findByMemberIdAndStudyClassId(member.getMemberId(), classId);
        return questions.stream().map(QuestionListResponse::new).collect(Collectors.toList());
    }
}
