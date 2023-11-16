package com.eefy.studyclass.domain.lecture.service;

import com.eefy.studyclass.domain.alarm.dto.request.PushAlarmRequest;
import com.eefy.studyclass.domain.alarm.service.AlarmService;
import com.eefy.studyclass.domain.lecture.dto.response.LectureIdResponse;
import com.eefy.studyclass.domain.lecture.dto.request.NoteInfoRequest;
import com.eefy.studyclass.domain.lecture.dto.response.NoteInfoResponse;
import com.eefy.studyclass.domain.lecture.persistence.entity.CanvasData;
import com.eefy.studyclass.domain.lecture.persistence.entity.DrawInfo;
import com.eefy.studyclass.domain.lecture.persistence.entity.LectureNoteInfo;
import com.eefy.studyclass.domain.lecture.persistence.mongo.LectureNoteInfoRepository;
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
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
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
    private final LectureNoteInfoRepository lectureNoteInfoRepository;
    private final LectureValidator lectureValidator;
    private final StudyClassValidator studyClassValidator;
    private final MemberServiceImpl memberService;
    private final MongoTemplate mongoTemplate;
    private final AlarmService alarmService;

    @Override
    public LectureIdResponse makeLectureNote(Integer teacherId, LectureNoteRequest lectureNoteRequest, MultipartFile filePath) throws IOException {

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

        return LectureIdResponse.builder()
                .id(lectureId).build();
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

    @Override
    public void noteLecture(Integer memberId, NoteInfoRequest noteInfoRequest) {
        Lecture lecture = lectureValidator.existLecture(lectureRepository.findById(noteInfoRequest.getLectureId()));

        LectureNoteInfo lectureNoteInfo = new LectureNoteInfo(memberId, noteInfoRequest);

        lectureNoteInfoRepository.save(lectureNoteInfo);
    }

    @Override
    public NoteInfoResponse getLectureNoteDetailPage(int memberId, int lectureId, int pageNum) {
        Lecture lecture = lectureValidator.existLecture(lectureRepository.findById(lectureId));

        ArrayList<LectureNoteInfo> lectureNoteInfoList = lectureNoteInfoRepository.findByMemberIdAndLectureId(memberId, lecture.getId());

        System.out.println(">>>>>>>>>>>>>>" + lectureNoteInfoList.size());

        if(lectureNoteInfoList.size() == 0) return new NoteInfoResponse(new ArrayList<>());

        List<DrawInfo> drawInfoList = new ArrayList<>();

        for (LectureNoteInfo lectureNoteInfo: lectureNoteInfoList) {

            for(int i = 0; i <lectureNoteInfo.getCanvasData().size(); i++) {
                if(lectureNoteInfo.getCanvasData().get(i).getPageNum() != pageNum) continue;

                List<DrawInfo> drawInfo = lectureNoteInfo.getCanvasData().get(i).getDrawInfo();

                for(DrawInfo info: drawInfo) {
                    drawInfoList.add(info);
                }
            }
        }
        return new NoteInfoResponse(drawInfoList);
    }
}
