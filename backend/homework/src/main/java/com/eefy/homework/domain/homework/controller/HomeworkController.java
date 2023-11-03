package com.eefy.homework.domain.homework.controller;

import com.eefy.homework.domain.homework.dto.request.MakeHomeworkRequest;
import com.eefy.homework.domain.homework.dto.response.MakeHomeworkResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/homework")
@RequiredArgsConstructor
public class HomeworkController {

    public ResponseEntity<MakeHomeworkResponse> makeHomework(
        @RequestBody MakeHomeworkRequest makeHomeworkRequest) {

        return null;
    }

}
