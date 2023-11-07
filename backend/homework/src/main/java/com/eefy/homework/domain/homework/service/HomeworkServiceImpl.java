package com.eefy.homework.domain.homework.service;

import com.eefy.homework.domain.homework.AiServerRestClient;
import com.eefy.homework.domain.homework.dto.request.AssignHomeworkToClassRequest;
import com.eefy.homework.domain.homework.dto.request.MakeHomeworkQuestionRequest;
import com.eefy.homework.domain.homework.dto.request.MakeHomeworkRequest;
import com.eefy.homework.domain.homework.dto.request.SolveProblemRequest;
import com.eefy.homework.domain.homework.dto.request.ViewHomeworkRequest;
import com.eefy.homework.domain.homework.dto.response.AssignHomeworkToClassResponse;
import com.eefy.homework.domain.homework.dto.response.GetProblemResponse;
import com.eefy.homework.domain.homework.dto.response.MakeHomeworkQuestionResponse;
import com.eefy.homework.domain.homework.dto.response.MakeHomeworkResponse;
import com.eefy.homework.domain.homework.dto.response.SolveHomeworkResponse;
import com.eefy.homework.domain.homework.dto.response.SolveProblemResponse;
import com.eefy.homework.domain.homework.dto.response.ViewHomeworkResponse;
import com.eefy.homework.domain.homework.exception.HomeworkNotFoundException;
import com.eefy.homework.domain.homework.persistence.entity.Choice;
import com.eefy.homework.domain.homework.persistence.entity.ClassHomework;
import com.eefy.homework.domain.homework.persistence.entity.Homework;
import com.eefy.homework.domain.homework.persistence.entity.HomeworkQuestion;
import com.eefy.homework.domain.homework.persistence.entity.HomeworkStudent;
import com.eefy.homework.domain.homework.persistence.entity.HomeworkStudentQuestion;
import com.eefy.homework.domain.homework.persistence.entity.enums.HomeworkQuestionType;
import com.eefy.homework.domain.homework.repository.ChoiceRepository;
import com.eefy.homework.domain.homework.repository.ClassHomeworkRepository;
import com.eefy.homework.domain.homework.repository.HomeworkCustomRepository;
import com.eefy.homework.domain.homework.repository.HomeworkQuestionRepository;
import com.eefy.homework.domain.homework.repository.HomeworkRepository;
import com.eefy.homework.domain.homework.repository.HomeworkStudentQuestionRepository;
import com.eefy.homework.domain.homework.repository.HomeworkStudentRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class HomeworkServiceImpl implements HomeworkService {

    //    private final ModelMapper modelMapper;
    private final HomeworkRepository homeworkRepository;
    private final HomeworkQuestionRepository homeworkQuestionRepository;
    private final ChoiceRepository choiceRepository;
    private final ClassHomeworkRepository classHomeworkRepository;
    private final HomeworkStudentRepository homeworkStudentRepository;
    private final HomeworkCustomRepository homeworkCustomRepository;
    private final HomeworkStudentQuestionRepository homeworkStudentQuestionRepository;
    private final AiServerRestClient aiServerRestClient;

    private static final List<Integer> dummyStudentId = List.of(1, 2, 3, 4, 5, 6, 7);

    @Override
    public MakeHomeworkResponse makeHomework(MakeHomeworkRequest makeHomeworkRequest,
        Integer memberId) {
        // todo:강사가 유효한 사용자인지 검증
        Homework homework =
            Homework.of(memberId, makeHomeworkRequest.getTitle(),
                makeHomeworkRequest.getContent(), makeHomeworkRequest.getType());

        homeworkRepository.save(homework);

        return MakeHomeworkResponse.builder()
            .homeworkId(homework.getId())
            .build();
    }

    @Override
    @Transactional
    public MakeHomeworkQuestionResponse makeQuestion(
        MakeHomeworkQuestionRequest makeHomeworkQuestionRequest, Integer memberId) {
        // todo: 강사가 유효한 사용자인지 검증

        Homework homework = validateHomework(makeHomeworkQuestionRequest.getHomeworkId());
        HomeworkQuestion homeworkQuestion = saveHomeworkQuestion(makeHomeworkQuestionRequest,
            homework);
        saveChoice(makeHomeworkQuestionRequest, homeworkQuestion);

        return new MakeHomeworkQuestionResponse(homework.getId());
    }

    @Override
    @Transactional
    public AssignHomeworkToClassResponse assignHomeworkToClass(
        AssignHomeworkToClassRequest assignHomeworkToClassRequest, Integer memberId) {
        // todo: 강사가 유효한 사용자인지 검증
        // todo: 클래스가 유요한지 검사

        Homework homework = validateHomework(assignHomeworkToClassRequest.getHomeworkId());

        ClassHomework classHomework = ClassHomework.of(homework,
            assignHomeworkToClassRequest.getClassId(),
            assignHomeworkToClassRequest.getDueDate());

        classHomeworkRepository.save(classHomework);

        // todo: 실제 클래스의 사용자 받아오는 restApi 작성
        for (Integer studentId : dummyStudentId) {
            homeworkStudentRepository.save(HomeworkStudent.from(studentId, classHomework));
        }

        return new AssignHomeworkToClassResponse(classHomework.getId());
    }

    @Override
    public ViewHomeworkResponse viewHomeworkByStudentId(ViewHomeworkRequest viewHomeworkRequest,
        Integer memberId) {

        return new ViewHomeworkResponse(
            homeworkCustomRepository.viewHomeworkByStudentId(
                viewHomeworkRequest.getClassId(), memberId));
    }

    @Override
    public GetProblemResponse getProblem(Integer classHomeworkId) {
        return new GetProblemResponse(homeworkCustomRepository.getProblem(classHomeworkId));
    }

    @Override
    @Transactional
    public SolveProblemResponse solveProblem(SolveProblemRequest solveProblemRequest,
        Integer memberId) {

        HomeworkStudent homeworkStudent = validateHomeworkStudent(
            solveProblemRequest.getHomeworkStudentId());
        HomeworkQuestion homeworkQuestion = validateHomeworkQuestion(
            solveProblemRequest.getHomeworkQuestionId());

        HomeworkStudentQuestion homeworkStudentQuestion = HomeworkStudentQuestion.from(
            homeworkQuestion,
            homeworkStudent, solveProblemRequest.getSubmitAnswer(),
            solveProblemRequest.getFilePath());

        homeworkStudentQuestionRepository.save(homeworkStudentQuestion);
        return new SolveProblemResponse(homeworkStudentQuestion.getId());
    }

    @Override
    @Transactional
    public SolveHomeworkResponse solveHomework(Integer homeworkStudentId, Integer memberId) {
        String testData = aiServerRestClient.getAnnounceScore("testData");
        log.info(testData + "@@@@@@@@@");

        HomeworkStudent homeworkStudent = validateHomeworkStudent(homeworkStudentId);

        List<HomeworkStudentQuestion> homeworkStudentQuestions =
            validateHomeworkStudentQuestionByHomeworkStudent(homeworkStudent);
        List<HomeworkQuestion> homeworkQuestions = validateHomeworkQuestionByHomework(
            homeworkStudentQuestions.get(0).getHomeworkQuestion().getHomework());

        if (homeworkQuestions.size() != homeworkStudentQuestions.size()) {
            throw new RuntimeException("문제를 다 안풀었습니다.");
        }

        int index = 0;
        for (HomeworkStudentQuestion homeworkStudentQuestion : homeworkStudentQuestions) {
            if (homeworkQuestions.get(index).getType().equals(HomeworkQuestionType.VOICE)) {
                // todo: 보이스 점수 확인
            } else {
                updateChoiceAndWriteProblemScore(homeworkQuestions.get(index),
                    homeworkStudentQuestion);
            }
            index++;
        }

        homeworkStudent.updateDoneDate();
        // homeworkStudent 의 doneDate 업데이트
        return new SolveHomeworkResponse(homeworkStudentId);
    }

    private void updateChoiceAndWriteProblemScore(HomeworkQuestion homeworkQuestion,
        HomeworkStudentQuestion homeworkStudentQuestion) {
        if (homeworkQuestion.getAnswer()
            .equals(homeworkStudentQuestion.getSubmitAnswer())) {
            homeworkStudentQuestion.updateScore(100);
        } else {
            homeworkStudentQuestion.updateScore(0);
        }
    }

    private List<HomeworkQuestion> validateHomeworkQuestionByHomework(Homework homework) {
        return homeworkQuestionRepository.findByHomeworkOrderById(homework);
    }

    private List<HomeworkStudentQuestion> validateHomeworkStudentQuestionByHomeworkStudent(
        HomeworkStudent homeworkStudent) {
        return homeworkStudentQuestionRepository.findByHomeworkStudentOrderByHomeworkQuestion(
            homeworkStudent);
    }

    private HomeworkStudent validateHomeworkStudent(Integer homeworkStudentId) {
        // todo: 커스텀 익셉션
        return homeworkStudentRepository.findById(homeworkStudentId)
            .orElseThrow(() -> new RuntimeException("해당하는 homeworkStudent 를 찾을 수 없습니다."));
    }

    private HomeworkQuestion validateHomeworkQuestion(Integer homeworkQuestionId) {
        // todo: 커스텀 익셉션
        return homeworkQuestionRepository.findById(homeworkQuestionId)
            .orElseThrow(() -> new RuntimeException("해당하는 homeworkQuestion 을 찾을 수 없습니다."));
    }

    private HomeworkQuestion saveHomeworkQuestion(
        MakeHomeworkQuestionRequest makeHomeworkQuestionRequest, Homework homework) {
        HomeworkQuestion homeworkQuestion = HomeworkQuestion.of(homework,
            makeHomeworkQuestionRequest.getTitle(),
            makeHomeworkQuestionRequest.getContent(), makeHomeworkQuestionRequest.getFilePath(),
            makeHomeworkQuestionRequest.getField(), makeHomeworkQuestionRequest.getAnswer());

        homeworkQuestionRepository.save(homeworkQuestion);
        return homeworkQuestion;
    }

    private void saveChoice(MakeHomeworkQuestionRequest makeHomeworkQuestionRequest,
        HomeworkQuestion homeworkQuestion) {
        // todo: batch를 사용한 쿼리 최적화 필요
        makeHomeworkQuestionRequest.getChoiceRequests()
            .forEach((v) ->
                choiceRepository.save(Choice.of(homeworkQuestion, v.getContent(), v.getNumber())));
    }

    private Homework validateHomework(Integer homeworkId) {
        return homeworkRepository.findById(homeworkId)
            .orElseThrow(() -> new HomeworkNotFoundException(homeworkId));
    }
}
