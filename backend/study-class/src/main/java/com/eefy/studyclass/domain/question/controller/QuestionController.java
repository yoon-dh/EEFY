package com.eefy.studyclass.domain.question.controller;


import com.eefy.studyclass.domain.question.dto.request.AnswerWriteRequest;
import com.eefy.studyclass.domain.question.dto.request.QuestionWriteRequest;
import com.eefy.studyclass.domain.question.dto.response.AnswerWriteResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionDetailResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionListResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionWriteResponse;
import com.eefy.studyclass.domain.question.service.QuestionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/question")
@RequiredArgsConstructor
@Tag(name = "Question", description = "질의응답 관련 API")
public class QuestionController {

    private final QuestionService questionService;

    @Operation(summary = "질의응답 목록 조회", description = "클래스의 질의응답 리스트를 조회하는 API")
    @GetMapping("/{classId}")
    public List<QuestionListResponse> getQuestionList(@RequestHeader("Member-Id") int memberId,
                                                      @PathVariable int classId) {
        return questionService.getQuestionList(memberId, classId);
    }

    @Operation(summary = "질의응답 상세 조회", description = "질의응답 상세 내용을 조회하는 API")
    @GetMapping("/detail/{questionId}")
    public QuestionDetailResponse getQuestionDetail(@PathVariable int questionId) {
        return questionService.getQuestionDetail(questionId);
    }

    @Operation(summary = "질의응답 등록", description = "학생이 질문을 등록하는 API")
    @PostMapping("/student")
    QuestionWriteResponse writeQuestion(@RequestHeader("Member-Id") int memberId,
                                        @RequestBody QuestionWriteRequest request) {
        return questionService.writeQuestion(memberId, request);
    }

    @Operation(summary = "질의응답 등록", description = "학생 및 강사가 답변을 등록하는 API")
    @PostMapping("/comment")
    AnswerWriteResponse writeQuestion(@RequestHeader("Member-Id") int memberId,
                                      @RequestBody AnswerWriteRequest request) {
        return questionService.writeAnswer(memberId, request);
    }
}
