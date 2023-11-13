package com.eefy.homework.domain.homework.service;

import com.eefy.homework.domain.homework.dto.AlarmSendRequest;
import com.eefy.homework.domain.homework.dto.ChoiceDto;
import com.eefy.homework.domain.homework.dto.ClassStudentDto;
import com.eefy.homework.domain.homework.dto.EvaluateAnnounceRequest;
import com.eefy.homework.domain.homework.dto.HomeworkDto;
import com.eefy.homework.domain.homework.dto.HomeworkQuestionDto;
import com.eefy.homework.domain.homework.dto.HomeworkStudentDto;
import com.eefy.homework.domain.homework.dto.HomeworkStudentQuestionDto;
import com.eefy.homework.domain.homework.dto.QuestionCountDto;
import com.eefy.homework.domain.homework.dto.request.AssignHomeworkToClassRequest;
import com.eefy.homework.domain.homework.dto.request.MakeHomeworkQuestionRequest;
import com.eefy.homework.domain.homework.dto.request.MakeHomeworkRequest;
import com.eefy.homework.domain.homework.dto.request.SolveProblemRequest;
import com.eefy.homework.domain.homework.dto.request.ViewHomeworkRequest;
import com.eefy.homework.domain.homework.dto.response.AssignHomeworkToClassResponse;
import com.eefy.homework.domain.homework.dto.response.GetProblemResponse;
import com.eefy.homework.domain.homework.dto.response.HomeworkListResponse;
import com.eefy.homework.domain.homework.dto.response.HomeworkQuestionResponse;
import com.eefy.homework.domain.homework.dto.response.MakeHomeworkQuestionResponse;
import com.eefy.homework.domain.homework.dto.response.MakeHomeworkResponse;
import com.eefy.homework.domain.homework.dto.response.PageInfo;
import com.eefy.homework.domain.homework.dto.response.SolveHomeworkResponse;
import com.eefy.homework.domain.homework.dto.response.SolveProblemResponse;
import com.eefy.homework.domain.homework.dto.response.StudyClassResponse;
import com.eefy.homework.domain.homework.dto.response.ViewHomeworkResponse;
import com.eefy.homework.domain.homework.exception.HomeworkNotFoundException;
import com.eefy.homework.domain.homework.feign.AiServiceFeignClient;
import com.eefy.homework.domain.homework.feign.ClassServiceFeignClient;
import com.eefy.homework.domain.homework.feign.MemberServiceFeignClient;
import com.eefy.homework.domain.homework.persistence.entity.Choice;
import com.eefy.homework.domain.homework.persistence.entity.ClassHomework;
import com.eefy.homework.domain.homework.persistence.entity.Homework;
import com.eefy.homework.domain.homework.persistence.entity.HomeworkQuestion;
import com.eefy.homework.domain.homework.persistence.entity.HomeworkStudent;
import com.eefy.homework.domain.homework.persistence.entity.HomeworkStudentQuestion;
import com.eefy.homework.domain.homework.persistence.entity.enums.HomeworkType;
import com.eefy.homework.domain.homework.repository.ChoiceRepository;
import com.eefy.homework.domain.homework.repository.ClassHomeworkRepository;
import com.eefy.homework.domain.homework.repository.HomeworkCustomRepository;
import com.eefy.homework.domain.homework.repository.HomeworkQuestionRepository;
import com.eefy.homework.domain.homework.repository.HomeworkRepository;
import com.eefy.homework.domain.homework.repository.HomeworkStudentQuestionRepository;
import com.eefy.homework.domain.homework.repository.HomeworkStudentRepository;
import com.eefy.homework.global.S3Uploader;
import java.io.IOException;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@Slf4j
@RequiredArgsConstructor
public class HomeworkServiceImpl implements HomeworkService {

    private final ModelMapper modelMapper;
    private final AiServiceFeignClient aiServiceFeignClient;
    private final ClassServiceFeignClient classServiceFeignClient;
    private final MemberServiceFeignClient memberServiceFeignClient;
    private final S3Uploader s3Uploader;

    private final HomeworkRepository homeworkRepository;
    private final HomeworkQuestionRepository homeworkQuestionRepository;
    private final ChoiceRepository choiceRepository;
    private final ClassHomeworkRepository classHomeworkRepository;
    private final HomeworkStudentRepository homeworkStudentRepository;
    private final HomeworkCustomRepository homeworkCustomRepository;
    private final HomeworkStudentQuestionRepository homeworkStudentQuestionRepository;

    @Value("${cloud.aws.s3.voiceDir}")
    private String voicePath;
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
        MakeHomeworkQuestionRequest makeHomeworkQuestionRequest, Integer memberId,
        MultipartFile voiceFile) throws IOException {

        Homework homework = validateHomework(makeHomeworkQuestionRequest.getHomeworkId());

        // todo: 강사가 유효한 사용자인지 검증
        String filePath = null;
        if (hasVoice(voiceFile)) {
            filePath = s3Uploader.upload(voiceFile, voicePath);
        }
        HomeworkQuestion homeworkQuestion = saveHomeworkQuestion(makeHomeworkQuestionRequest,
            homework, filePath);
        saveChoice(makeHomeworkQuestionRequest, homeworkQuestion);

        return new MakeHomeworkQuestionResponse(homework.getId());
    }

    @Override
    @Transactional
    public AssignHomeworkToClassResponse assignHomeworkToClass(
        AssignHomeworkToClassRequest assignHomeworkToClassRequest, Integer memberId) {

        Homework homework = validateHomework(assignHomeworkToClassRequest.getHomeworkId());

        ClassHomework classHomework = ClassHomework.of(homework,
            assignHomeworkToClassRequest.getClassId(),
            assignHomeworkToClassRequest.getDueDate());

        classHomeworkRepository.save(classHomework);

        List<ClassStudentDto> classStudents = classServiceFeignClient.getClassStudent(memberId,
            assignHomeworkToClassRequest.getClassId());
        log.info(classStudents.toString());

        for (ClassStudentDto classStudentDto : classStudents) {
            homeworkStudentRepository.save(
                HomeworkStudent.from(classStudentDto.getMemberId(), classHomework));
        }

        StudyClassResponse classDetail = classServiceFeignClient.getClassDetail(
            assignHomeworkToClassRequest.getClassId());

        memberServiceFeignClient.sendAlarmToClassMember(memberId, getAlarmSendRequest(homework,
            classHomework, classDetail));

        return new AssignHomeworkToClassResponse(classHomework.getId());
    }

    private AlarmSendRequest getAlarmSendRequest(Homework homework,
        ClassHomework classHomework, StudyClassResponse classDetail) {
        return AlarmSendRequest.builder()
            .classId(classHomework.getClassId())
            .className(classDetail.getTitle())
            .link(null)
            .title("새로운 과제가 할당되었습니다.")
            .content(
                String.format("%s 클래스 : %s 제출기한 -> %s", classDetail.getTitle(), homework.getTitle(),
                    classHomework.getDueDate()
                        .format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
            )
            .build();
    }

    @Override
    public ViewHomeworkResponse viewHomeworkByStudentId(ViewHomeworkRequest viewHomeworkRequest,
        Integer memberId) {
        List<HomeworkStudentDto> homeworkStudentDtos = homeworkCustomRepository.viewHomeworkByStudentId(
            viewHomeworkRequest.getClassId(), memberId);
        List<QuestionCountDto> solvedHomeworkProblemCount = homeworkCustomRepository.getSolvedHomeworkProblemCount(
            viewHomeworkRequest.getClassId(), memberId);
        List<QuestionCountDto> homeworkProblemCount = homeworkCustomRepository.getHomeworkProblemCount(
            viewHomeworkRequest.getClassId(), memberId);

        insertTotalCount(homeworkStudentDtos, homeworkProblemCount);
        insertSolvedCount(homeworkStudentDtos, solvedHomeworkProblemCount);
        return new ViewHomeworkResponse(homeworkStudentDtos);
    }

    @Override
    @Transactional
    public GetProblemResponse getProblem(Integer classHomeworkId, Integer memberId) {
        List<HomeworkQuestion> problem = homeworkCustomRepository.getProblem(classHomeworkId);
        HomeworkStudent homeworkStudent = validateHomeworkStudent(classHomeworkId, memberId);

        List<HomeworkQuestionResponse> homeworkQuestionResponses = getHomeworkQuestionWithChoice(
            problem);
        List<HomeworkStudentQuestionDto> homeworkStudentQuestionDtos = getHomeworkStudentQuestionDtos(
            problem, homeworkStudent);
        return new GetProblemResponse(homeworkQuestionResponses, homeworkStudentQuestionDtos);
    }

    @Override
    @Transactional
    public SolveProblemResponse solveProblem(SolveProblemRequest solveProblemRequest,
        Integer memberId, MultipartFile voiceFile) throws IOException {

        HomeworkStudent homeworkStudent = validateHomeworkStudent(
            solveProblemRequest.getHomeworkStudentId());
        HomeworkQuestion homeworkQuestion = validateHomeworkQuestion(
            solveProblemRequest.getHomeworkQuestionId());

        String uploadPath = null;
        String sttText = null;
        if (hasVoice(voiceFile)) {
            uploadPath = s3Uploader.upload(voiceFile, voicePath);
            sttText = aiServiceFeignClient.getSttText(voiceFile);
        }

        HomeworkStudentQuestion homeworkStudentQuestion = HomeworkStudentQuestion.from(
            homeworkQuestion, homeworkStudent, solveProblemRequest.getSubmitAnswer(), uploadPath);

        if (hasVoice(voiceFile)) {
            updateVoiceProblemScore(homeworkStudentQuestion);
        } else {
            updateChoiceAndWriteProblemScore(homeworkQuestion, homeworkStudentQuestion);
        }

        homeworkStudentQuestionRepository.save(homeworkStudentQuestion);
        return new SolveProblemResponse(homeworkStudentQuestion.getId(), sttText);
    }

    @Override
    @Transactional
    public SolveHomeworkResponse solveHomework(Integer homeworkStudentId, Integer memberId) {
        HomeworkStudent homeworkStudent = validateHomeworkStudent(homeworkStudentId);

        List<HomeworkStudentQuestion> homeworkStudentQuestions =
            validateHomeworkStudentQuestionByHomeworkStudent(homeworkStudent);
        List<HomeworkQuestion> homeworkQuestions = validateHomeworkQuestionByHomework(
            homeworkStudentQuestions.get(0).getHomeworkQuestion().getHomework());

        if (homeworkQuestions.size() != homeworkStudentQuestions.size()) {
            throw new RuntimeException("문제를 다 안풀었습니다.");
        }

        homeworkStudent.updateDoneDate();
        return new SolveHomeworkResponse(homeworkStudentId);
    }

    @Override
    public HomeworkListResponse getHomeworkByTeacherId(Integer memberId, Pageable pageable,
        HomeworkType type, String searchWord) {

        Page<HomeworkDto> homeowrkDtos = homeworkCustomRepository.getHomework(
            memberId, pageable, type, searchWord);

        List<HomeworkDto> content = homeowrkDtos.getContent();

        return HomeworkListResponse.of(content,
            PageInfo.of(homeowrkDtos.getNumber(), homeowrkDtos.getTotalPages(),
                homeowrkDtos.getTotalElements()));
    }

    @Override
    @Transactional
    public MakeHomeworkResponse finishMakingHomework(Integer memberId, Integer homeworkId) {
        validateHomework(homeworkId).finishMakingHomework();
        return new MakeHomeworkResponse(homeworkId);
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
        MakeHomeworkQuestionRequest makeHomeworkQuestionRequest, Homework homework,
        String filePath) {
        HomeworkQuestion homeworkQuestion = HomeworkQuestion.of(homework,
            makeHomeworkQuestionRequest.getTitle(),
            makeHomeworkQuestionRequest.getContent(), filePath,
            makeHomeworkQuestionRequest.getField(), makeHomeworkQuestionRequest.getAnswer());

        homeworkQuestionRepository.save(homeworkQuestion);
        return homeworkQuestion;
    }

    private void saveChoice(MakeHomeworkQuestionRequest makeHomeworkQuestionRequest,
        HomeworkQuestion homeworkQuestion) {
        // todo: batch를 사용한 쿼리 최적화 필요
        if (makeHomeworkQuestionRequest.getChoiceRequests() == null) {
            return;
        }

        makeHomeworkQuestionRequest.getChoiceRequests()
            .forEach((v) ->
                choiceRepository.save(Choice.of(homeworkQuestion, v.getContent(), v.getNumber())));
    }

    private Homework validateHomework(Integer homeworkId) {
        return homeworkRepository.findById(homeworkId)
            .orElseThrow(() -> new HomeworkNotFoundException(homeworkId));
    }


    private List<HomeworkStudentQuestionDto> getHomeworkStudentQuestionDtos(
        List<HomeworkQuestion> problem, HomeworkStudent homeworkStudent) {
        List<HomeworkStudentQuestionDto> homeworkStudentQuestionDtos = new ArrayList<>();
        for (HomeworkQuestion homeworkQuestionResponse : problem) {
            HomeworkStudentQuestion questionSolved = homeworkStudent.isQuestionSolved(
                homeworkQuestionResponse.getId());

            if (questionSolved == null) {
                homeworkStudentQuestionDtos.add(null);
            } else {
                HomeworkStudentQuestionDto map = modelMapper.map(questionSolved,
                    HomeworkStudentQuestionDto.class);

                homeworkStudentQuestionDtos.add(map);
            }
        }
        return homeworkStudentQuestionDtos;
    }

    private List<HomeworkQuestionResponse> getHomeworkQuestionWithChoice(
        List<HomeworkQuestion> problem) {
        List<HomeworkQuestionResponse> homeworkQuestionResponses = new ArrayList<>();
        for (HomeworkQuestion homeworkQuestion : problem) {
            List<ChoiceDto> choiceDtos = homeworkQuestion.getChoices().stream()
                .map(this::mapChoiceToDto)
                .collect(Collectors.toList());

            homeworkQuestionResponses.add(
                HomeworkQuestionResponse.of(mapHomeworkQuestionToDto(homeworkQuestion),
                    choiceDtos));
        }
        return homeworkQuestionResponses;
    }

    private HomeworkStudent validateHomeworkStudent(Integer classHomeworkId, Integer memberId) {
        return homeworkStudentRepository.findByClassHomeworkIdAndMemberId(classHomeworkId, memberId)
            .orElseThrow(() -> new RuntimeException("홈워크 스튜던트 없음"));
    }

    private HomeworkQuestionDto mapHomeworkQuestionToDto(HomeworkQuestion homeworkQuestion) {
        return modelMapper.map(homeworkQuestion, HomeworkQuestionDto.class);
    }

    private ChoiceDto mapChoiceToDto(Choice choice) {
        return modelMapper.map(choice, ChoiceDto.class);
    }

    private void insertTotalCount(List<HomeworkStudentDto> homeworkStudentDtos,
        List<QuestionCountDto> homeworkProblemCount) {
        for (HomeworkStudentDto homeworkStudentDto : homeworkStudentDtos) {
            for (QuestionCountDto questionCountDto : homeworkProblemCount) {
                if (questionCountDto.getHomeworkStudentId()
                    .equals(homeworkStudentDto.getHomeworkStudentId())) {
                    homeworkStudentDto.setTotalCount(questionCountDto.getCount());
                }
            }
        }
    }

    private void insertSolvedCount(List<HomeworkStudentDto> homeworkStudentDtos,
        List<QuestionCountDto> homeworkProblemCount) {
        for (HomeworkStudentDto homeworkStudentDto : homeworkStudentDtos) {
            for (QuestionCountDto questionCountDto : homeworkProblemCount) {
                if (questionCountDto.getHomeworkStudentId()
                    .equals(homeworkStudentDto.getHomeworkStudentId())) {
                    homeworkStudentDto.setSolvedCount(questionCountDto.getCount());
                }
            }
        }
    }

    private boolean hasVoice(MultipartFile voiceFile) {
        return voiceFile != null && !voiceFile.isEmpty();
    }

    private void updateVoiceProblemScore(HomeworkStudentQuestion homeworkStudentQuestion) {
        String score = aiServiceFeignClient.getAnnounceScore(
            new EvaluateAnnounceRequest(homeworkStudentQuestion.getFilePath()));
        homeworkStudentQuestion.updateScore(Character.getNumericValue(score.charAt(1)) * 20);
    }

}
