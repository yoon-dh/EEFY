package com.eefy.homework.domain.homework.controller;

import com.eefy.homework.domain.homework.dto.request.HomeworkInsertRequest;
import com.eefy.homework.domain.homework.dto.response.HomeworkInsertResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/homework")
@RequiredArgsConstructor
public class HomeworkController {

    public ResponseEntity<HomeworkInsertResponse> insertHomework(
        @RequestBody HomeworkInsertRequest homeworkInsertRequest) {

        return null;
    }

}
