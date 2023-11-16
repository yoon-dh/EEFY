package com.eefy.homework.domain.homework.feign;

import com.eefy.homework.domain.homework.dto.ClassStudentDto;
import com.eefy.homework.domain.homework.dto.response.StudyClassResponse;
import java.util.List;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "study-class-service", url = "k9b306.p.ssafy.io:64418")
public interface ClassServiceFeignClient {

    @GetMapping("/api/study-class/member")
    List<ClassStudentDto> getClassStudent(@RequestHeader("Member-Id") Integer memberId,
        @RequestParam("classId") Integer classId);

    @GetMapping("/api/study-class/{studyClassId}")
    StudyClassResponse getClassDetail(@PathVariable("studyClassId") Integer classId);

}
