package com.eefy.studyclass.domain.lecture.service;

import com.eefy.studyclass.domain.alarm.dto.request.PushAlarmRequest;
import com.eefy.studyclass.domain.alarm.service.AlarmService;
import com.eefy.studyclass.domain.member.persistence.entity.Member;
import com.eefy.studyclass.domain.member.service.MemberServiceImpl;
import com.eefy.studyclass.domain.lecture.dto.response.LectureNoteListResponse;
import com.eefy.studyclass.domain.lecture.dto.request.LectureNoteRequest;
import com.eefy.studyclass.domain.lecture.dto.response.LectureResponse;
import com.eefy.studyclass.domain.lecture.exception.validator.LectureValidator;
import com.eefy.studyclass.domain.studyclass.exception.validator.StudyClassValidator;
import com.eefy.studyclass.domain.lecture.persistence.entity.Lecture;
import com.eefy.studyclass.domain.studyclass.persistence.entity.StudyClass;
import com.eefy.studyclass.domain.lecture.persistence.mysql.LectureRepository;
import com.eefy.studyclass.domain.studyclass.persistence.mysql.StudyClassRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class LectureServiceImpl implements LectureService {
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;
    @Value("${cloud.aws.s3.lectureDir}")
    private String dir;
    @Autowired
    private AwsS3Service s3Uploader;
    private final StudyClassRepository studyClassRepository;
    private final LectureRepository lectureRepository;
    private final LectureValidator lectureValidator;
    private final StudyClassValidator studyClassValidator;
    private final MemberServiceImpl memberService;
    private final AlarmService alarmService;

    @Override
    public void makeLectureNote(Integer teacherId, LectureNoteRequest lectureNoteRequest, MultipartFile filePath) throws IOException {

        Member member = memberService.getMemberInfo(teacherId, teacherId);
        StudyClass studyClass = studyClassValidator.existsStudyClassByClassId(studyClassRepository.findById(lectureNoteRequest.getClassId()));

        String filename = s3Uploader.upload(filePath, dir);

        Lecture lecture = Lecture.builder()
                .memberId(member.getMemberId())
                .studyClass(studyClass)
                .filePath(filename)
                .title(lectureNoteRequest.getTitle())
                .content(lectureNoteRequest.getContent())
                .build();

        Integer lectureId = lectureRepository.save(lecture).getId();

        PushAlarmRequest pushAlarmRequest = PushAlarmRequest.builder()
                .classId(studyClass.getId())
                .link("https://k9b306.p.ssafy.io/class/" + studyClass.getId() + "/lecture/" + lectureId)
                .className(studyClass.getTitle())
                .title("새로운 강의자료가 등록되었습니다.")
                .content(member.getNickname() + "강사님이 " + studyClass.getTitle() + "강좌에 새로운 강의자료를 등록했습니다.")
                .build();

        alarmService.pushAlarmToStudent(teacherId, pushAlarmRequest);

    }

    @Override
    public List<LectureNoteListResponse> getLectureNoteList(int classId) {

        List<Lecture> lectureList = lectureRepository.findByStudyClassIdOrderByCreatedAtDesc(classId);

        return lectureList.stream().map(lecture ->  LectureNoteListResponse.builder()
                .id(lecture.getId())
                .title(lecture.getTitle())
                .createdAt(lecture.getCreatedAt())
                .modifiedAt(lecture.getUpdatedAt()).build()).collect(Collectors.toList());
    }

    @Override
    public LectureResponse getLecture(int lectureId) {

        Lecture lecture = lectureValidator.existLecture(lectureRepository.findById(lectureId));
        Member member = memberService.getMemberInfo(lecture.getMemberId(), lecture.getMemberId());

        return new LectureResponse(lecture, member);
    }
}
