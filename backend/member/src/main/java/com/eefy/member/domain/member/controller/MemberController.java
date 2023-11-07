package com.eefy.member.domain.member.controller;

import com.eefy.member.domain.member.dto.request.JoinRequest;
import com.eefy.member.domain.member.dto.request.MemberUpdateRequest;
import com.eefy.member.domain.member.dto.response.MemberResponse;
import com.eefy.member.domain.member.dto.response.StudentResponse;
import com.eefy.member.domain.member.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
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
@Tag(name = "Member", description = "사용자 관련 API")
public class MemberController {
    private final MemberService memberService;

    @Operation(summary = "회원가입", description = "회원가입 API")
    @PostMapping
    public String join(@Validated @RequestBody JoinRequest request) {
        memberService.join(request);
        return "SUCCESS";
    }

    @Operation(summary = "수강생 조회", description = "강사가 수강생을 조회하는 API")
    @GetMapping("/tutor")
    public List<StudentResponse> getStudent(@RequestParam String key,
                                            @RequestParam String value) {
        return memberService.getStudent(key, value);
    }

    @Operation(summary = "사용자 정보 변경", description = "닉네임, 휴대폰 번호, 프로필 사진 변경 API")
    @PutMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public String MemberInfoUpdate(@RequestHeader("Member-Id") int memberId,
                                   @RequestPart(name = "request") MemberUpdateRequest request,
                                   @RequestPart(name = "profileImage", required = false) MultipartFile profileImage) {
        memberService.updateMember(memberId, request, profileImage);
        return "SUCCESS";
    }

    @Operation(summary = "특정 사용자 정보 조회", description = "특정 사용자 한 명의 정보를 조회하는 API")
    @GetMapping
    public MemberResponse getMember(@RequestHeader("Member-Id") int memberId) {
        return memberService.getMember(memberId);
    }
}