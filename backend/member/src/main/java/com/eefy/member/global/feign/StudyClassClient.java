package com.eefy.member.global.feign;

import com.eefy.member.domain.studyclass.dto.response.SearchStudentResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "studyClassClient", url = "https://k9b306.p.ssafy.io/api/study-class")
public interface StudyClassClient {

    @GetMapping("/member")
    List<SearchStudentResponse> searchStudentList(
            @RequestHeader("Member-Id") int teacherId, @RequestParam int classId);
}
