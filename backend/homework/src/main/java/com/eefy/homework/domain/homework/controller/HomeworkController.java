package com.eefy.homework.domain.homework.controller;

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
import com.eefy.homework.domain.homework.service.HomeworkService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/homework")
public class HomeworkController {

    private final HomeworkService homeworkService;

    @PostMapping("/make")
    public ResponseEntity<MakeHomeworkResponse> makeHomework(
        @RequestBody MakeHomeworkRequest makeHomeworkRequest,
        @RequestHeader("Member-Id") Integer memberId) {

        log.info("homework/make/ api 호출 : {}", makeHomeworkRequest);
        return new ResponseEntity<>(
            homeworkService.makeHomework(makeHomeworkRequest, memberId),
            HttpStatus.OK);
    }

    @PostMapping("/make/question")
    public ResponseEntity<MakeHomeworkQuestionResponse> makeQuestion(
        @RequestBody MakeHomeworkQuestionRequest makeHomeworkQuestionRequest,
        @RequestHeader("Member-Id") Integer memberId) {

        log.info("homework/make/question api 호출 : {}", makeHomeworkQuestionRequest);

        return new ResponseEntity<>(
            homeworkService.makeQuestion(makeHomeworkQuestionRequest, memberId),
            HttpStatus.OK);
    }

    @PostMapping("/assign/class")
    public ResponseEntity<AssignHomeworkToClassResponse> assignHomeworkToClass(
        @RequestBody AssignHomeworkToClassRequest assignHomeworkToClassRequest,
        @RequestHeader("Member-Id") Integer memberId) {

        return new ResponseEntity<>(
            homeworkService.assignHomeworkToClass(assignHomeworkToClassRequest, memberId),
            HttpStatus.OK);
    }

    @GetMapping("/view")
    public ResponseEntity<ViewHomeworkResponse> viewHomework(
        ViewHomeworkRequest viewHomeworkRequest,
        @RequestHeader("Member-Id") Integer memberId) {

        return new ResponseEntity<>(
            homeworkService.viewHomeworkByStudentId(viewHomeworkRequest, memberId),
            HttpStatus.OK);
    }

    @GetMapping("/problem/{classHomeworkId}")
    public ResponseEntity<GetProblemResponse> getProblems(
        @PathVariable Integer classHomeworkId
    ) {
        return new ResponseEntity<>(homeworkService.getProblem(classHomeworkId), HttpStatus.OK);
    }

    // 과제 문제를 제출하는 로직
    // 과제가 완료되는 로직
    @PostMapping("/solve")
    public ResponseEntity<SolveProblemResponse> solveProblem(
        @RequestBody SolveProblemRequest solveProblemRequest,
        @RequestHeader("Member-Id") Integer memberId
    ) {
        return new ResponseEntity<>(
            homeworkService.solveProblem(solveProblemRequest, memberId),
            HttpStatus.OK);
    }

    @GetMapping("/solve/{homeworkStudentId}")
    public ResponseEntity<SolveHomeworkResponse> solveHomework(
        @PathVariable Integer homeworkStudentId,
        @RequestHeader("Member-Id") Integer memberId
    ) {

        homeworkService.solveHomework(homeworkStudentId, memberId);
        return null;
    }

}
