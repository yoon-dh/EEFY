package com.eefy.studyclass.domain.lecture.persistence.mongo;

import com.eefy.studyclass.domain.lecture.persistence.entity.LectureNoteInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.ArrayList;
import java.util.Optional;

public interface LectureNoteInfoRepository extends MongoRepository<LectureNoteInfo, String> {
    boolean existsByMemberIdAndLectureId(Integer memberId, Integer lectureId);

    ArrayList<LectureNoteInfo> findByMemberIdAndLectureId(Integer memberId, Integer lectureId);

    Optional<LectureNoteInfo> existsByMemberIdAndLectureIdAndCanvasDataPageNum(Integer memberId, Integer lectureId, Integer pageNum);

    Optional<LectureNoteInfo> findByMemberIdAndLectureIdAndCanvasDataPageNum(int memberId, Integer lecture, int pageNum);
}
