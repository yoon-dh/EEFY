package com.eefy.member.domain.studyclass.service;

import com.eefy.member.domain.member.exception.validator.MemberValidator;
import com.eefy.member.domain.member.persistence.MemberRepository;
import com.eefy.member.domain.member.persistence.entity.Lecture;
import com.eefy.member.domain.member.persistence.entity.Member;
import com.eefy.member.domain.member.persistence.mysql.LectureRepository;
import com.eefy.member.domain.studyclass.dto.request.LectureNoteRequest;
import com.eefy.member.domain.studyclass.dto.response.LectureNoteListResponse;
import com.eefy.member.domain.studyclass.dto.response.LectureResponse;
import com.eefy.member.domain.studyclass.dto.response.SearchStudentResponse;
import com.eefy.member.domain.studyclass.exception.validator.LectureValidator;
import com.eefy.member.global.feign.StudyClassClient;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class StudyClassServiceImpl implements StudyClassService {
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;
    @Value("${cloud.aws.s3.lectureDir}")
    private String dir;
    @Autowired
    private AwsS3Service s3Uploader;
    private final StudyClassClient studyClassClient;
    private final MemberValidator memberValidator;
    private final LectureValidator lectureValidator;

    private final MemberRepository memberRepository;
    private final LectureRepository lectureRepository;

    @Override
    public List<SearchStudentResponse> searchStudentList(int classId, String jwtToken) {
        return studyClassClient.searchStudentList(jwtToken, classId);
    }

    @Override
    public void makeLectureNote(int teacherId, LectureNoteRequest lectureNoteRequest, MultipartFile filePath) throws IOException {
        Member member = memberValidator.checkMemberRole(memberRepository.findById(teacherId));

        log.info(">>> 강의자료 s3Uploader 실행 이전");
        String filename = s3Uploader.upload(filePath, dir);

        log.info(">>> 강의자료 s3Uploader 실행 이후");
        Lecture lecture = Lecture.builder()
                .member(member)
                .filePath(filename)
                .title(lectureNoteRequest.getTitle())
                .content(lectureNoteRequest.getContent())
                .build();

        lectureRepository.save(lecture);
    }

    @Override
    public List<LectureNoteListResponse> getLectureNoteList(int classId) {

        List<Lecture> lectureList = lectureRepository.findByClassId(classId);

        return lectureList.stream().map(lecture ->  LectureNoteListResponse.builder()
                .id(lecture.getId())
                .title(lecture.getTitle())
                .createdAt(lecture.getCreatedAt())
                .modifiedAt(lecture.getUpdatedAt()).build()).collect(Collectors.toList());
    }

    @Override
    public LectureResponse getLecture(int lectureId) {

        Lecture lecture = lectureValidator.existLecture(lectureRepository.findById(lectureId));

        return new LectureResponse(lecture);
    }
}
