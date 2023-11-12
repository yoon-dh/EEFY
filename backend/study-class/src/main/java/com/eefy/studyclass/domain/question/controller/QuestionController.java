package com.eefy.studyclass.domain.question.controller;


import com.eefy.studyclass.domain.question.dto.request.AnswerModifyRequest;
import com.eefy.studyclass.domain.question.dto.request.AnswerWriteRequest;
import com.eefy.studyclass.domain.question.dto.request.QuestionModifyRequest;
import com.eefy.studyclass.domain.question.dto.response.AnswerListResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionDetailResponse;
import com.eefy.studyclass.domain.question.dto.response.QuestionListResponse;
import com.eefy.studyclass.domain.question.service.QuestionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
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

    @Operation(summary = "질의응답(질문) 등록", description = "학생이 질문을 등록하는 API")
    @PostMapping("/student")
    ResponseEntity<Void> writeQuestion(@RequestHeader("Member-Id") int memberId,
                                       @RequestBody com.eefy.studyclass.domain.question.dto.request.QuestionWriteRequest request) {
        questionService.writeQuestion(memberId, request);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "질의응답(질문) 수정", description = "학생이 질문을 수정하는 API")
    @PutMapping("/student")
    ResponseEntity<Void> modifyQuestion(@RequestHeader("Member-Id") int memberId,
                                        @RequestBody QuestionModifyRequest request) {
        questionService.updateQuestion(memberId, request);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "질의응답(질문) 삭제", description = "학생이 질문을 삭제하는 API")
    @DeleteMapping("/{questionId}")
    ResponseEntity<Void> deleteQuestion(@RequestHeader("Member-Id") int memberId,
                                        @PathVariable int questionId) {

        questionService.deleteQuestion(memberId, questionId);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "질의응답 상세 조회", description = "질의응답을 상세조회하는 API")
    @GetMapping("/detail/{questionId}")
    ResponseEntity<QuestionDetailResponse> getQuestionDetail(@RequestHeader("Member-Id") int memberId,
                                                             @PathVariable int questionId) {
        log.info("==========" + questionId + "==========");
        return ResponseEntity.ok(questionService.getQuestionDetail(memberId, questionId));
    }
    
    @Operation(summary = "질의응답(답변) 등록", description = "학생 및 강사가 답변을 등록하는 API")
    @PostMapping("/comment")
    ResponseEntity<Void> writeAnswer(@RequestHeader("Member-Id") int memberId,
                                     @RequestBody AnswerWriteRequest request) {
        questionService.writeAnswer(memberId, request);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "질의응답(답변) 수정", description = "학생 및 강사가 답변을 수정하는 API")
    @PutMapping("/comment")
    ResponseEntity<Void> modifyAnswer(@RequestHeader("Member-Id") int memberId,
                                      @RequestBody AnswerModifyRequest request) {
        questionService.updateAnswer(memberId, request);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "질의응답(답변) 삭제", description = "학생 및 강사가 답변을 수정하는 API")
    @DeleteMapping("/comment/{commentId}")
    ResponseEntity<Void> deleteAnswer(@RequestHeader("Member-Id") int memberId,
                                      @PathVariable int commentId) {
        questionService.deleteAnswer(memberId, commentId);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "질의응답(답변) 리스트 조회", description = "학생 및 강사가 답변 리스트를 조회하는 API")
    @GetMapping("/comment/detail/{questionId}")
    ResponseEntity<List<AnswerListResponse>> getAnswerList(@RequestHeader("Member-Id") int memberId,
                                                           @PathVariable int questionId) {
        return ResponseEntity.ok(questionService.getAnswerlist(memberId, questionId));
    }

    @Operation(summary = "질의응답(답변) 문제 해결 완료", description = "학생이 질문 해결이 완료되었는지 체크하는 API")
    @PutMapping("/{questionId}")
    ResponseEntity<Void> updateQuestionStatus(@RequestHeader("Member-Id") int memberId,
                                              @PathVariable int questionId) {
        questionService.updateQuestionStatus(memberId, questionId);
        return ResponseEntity.ok().build();
    }
}
