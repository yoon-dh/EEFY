package com.eefy.member.domain.member.controller;

import com.eefy.member.domain.member.dto.request.JoinRequest;
import com.eefy.member.domain.member.dto.request.MemberUpdateRequest;
import com.eefy.member.domain.member.dto.response.StudentResponse;
import com.eefy.member.domain.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @PostMapping
    public String join(@Validated @RequestBody JoinRequest request) {
        memberService.join(request);
        return "SUCCESS";
    }

    @GetMapping("/tutor")
    public List<StudentResponse> getStudent(@RequestParam String key,
                                            @RequestParam String value) {
        return memberService.getStudent(key, value);
    }

    @PutMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public String MemberInfoUpdate(@RequestHeader("Member-Id") int memberId,
                                   @RequestPart(name = "request") MemberUpdateRequest request,
                                   @RequestPart(name = "files", required = false) MultipartFile profileImage) {
        memberService.updateMember(memberId, request, profileImage);
        return "SUCCESS";
    }
}
