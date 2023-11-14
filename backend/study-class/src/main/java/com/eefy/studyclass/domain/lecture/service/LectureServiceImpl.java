package com.eefy.studyclass.domain.lecture.service;

import com.eefy.studyclass.domain.lecture.persistence.entity.CanvasData;
import com.eefy.studyclass.domain.lecture.dto.request.NoteInfoRequest;
import com.eefy.studyclass.domain.lecture.dto.response.NoteInfoResponse;
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
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
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

        lectureRepository.save(lecture);
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

        boolean existLectureNoteInfoById = lectureNoteInfoRepository.existsByMemberIdAndLectureId(memberId, noteInfoRequest.getLectureId());
        if(!existLectureNoteInfoById) {
            LectureNoteInfo lectureNoteInfo = new LectureNoteInfo(memberId, noteInfoRequest);

            lectureNoteInfoRepository.save(lectureNoteInfo);
        } else {
            LectureNoteInfo lectureNoteInfo = lectureNoteInfoRepository.findByMemberIdAndLectureId(memberId, noteInfoRequest.getLectureId());

            for(CanvasData canvasData: lectureNoteInfo.getCanvasData()) {
                Optional<LectureNoteInfo> optionalLectureNoteInfo = lectureNoteInfoRepository.existsByMemberIdAndLectureIdAndCanvasDataPageNum(memberId, noteInfoRequest.getLectureId(), canvasData.getPageNum());

                if(!optionalLectureNoteInfo.isEmpty()) {
                    Criteria criteria = Criteria.where("memberId").is(memberId).and("lectureId").is(lectureNoteInfo.getLectureId());
                    Query query = new Query(criteria);

                    Update update = new Update().push("canvasData", canvasData.getDrawInfo());

                    mongoTemplate.updateFirst(query, update, LectureNoteInfo.class);
                } else {
                    Criteria criteria = Criteria.where("memberId").is(memberId).and("lectureId").is(lectureNoteInfo.getLectureId()).and("canvasData.pageNum").is(canvasData.getPageNum());
                    Query query = new Query(criteria);
                    Update update = new Update().push("canvasData.drawInfo", canvasData);
                    mongoTemplate.updateFirst(query, update, LectureNoteInfo.class);
                }
            }
        }
    }

    @Override
    public NoteInfoResponse getLectureNoteDetailPage(int memberId, int lectureId, int pageNum) {
        Lecture lecture = lectureValidator.existLecture(lectureRepository.findById(lectureId));

        LectureNoteInfo lectureNoteInfo = lectureNoteInfoRepository.findByMemberIdAndLectureId(memberId, lecture.getId());

        if(lectureNoteInfo == null) return new NoteInfoResponse(lecture, new ArrayList<>());

        Criteria criteria = Criteria.where("lectureId").is(lectureId)
                .and("memberId").is(memberId)
                .and("canvasData.pageNum").is(pageNum);

        Query query = new Query(criteria);
        query.fields().exclude("_id").include("canvasData.drawInfo");

        List<DrawInfo> drawInfoList = mongoTemplate.find(query, LectureNoteInfo.class).stream()
                .flatMap(lectureNote -> lectureNote.getCanvasData().stream())
                .flatMap(canvasData -> canvasData.getDrawInfo().stream())
                .collect(Collectors.toList());

        return new NoteInfoResponse(lecture, drawInfoList);
    }
}
