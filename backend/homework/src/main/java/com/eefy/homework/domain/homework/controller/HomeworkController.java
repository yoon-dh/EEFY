package com.eefy.homework.domain.homework.controller;

import com.eefy.homework.domain.homework.dto.request.MakeHomeworkRequest;
import com.eefy.homework.domain.homework.dto.response.MakeHomeworkResponse;
import com.eefy.homework.domain.homework.service.HomeworkService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
        @RequestBody MakeHomeworkRequest makeHomeworkRequest) {

        log.info("homework/make/ api 호출 : {}", makeHomeworkRequest);

        MakeHomeworkResponse makeHomeworkResponse = homeworkService.makeHomework(
            makeHomeworkRequest);

        log.info("homework/make/ api 결과 : {}", makeHomeworkResponse);

        return new ResponseEntity<>(
            makeHomeworkResponse,
            HttpStatus.OK);
    }
}
