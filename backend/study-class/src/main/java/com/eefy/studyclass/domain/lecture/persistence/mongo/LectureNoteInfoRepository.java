package com.eefy.studyclass.domain.lecture.persistence.mongo;

import com.eefy.studyclass.domain.lecture.persistence.entity.Lecture;
import com.eefy.studyclass.domain.lecture.persistence.entity.LectureNoteInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface LectureNoteInfoRepository extends MongoRepository<LectureNoteInfo, String> {
    boolean existsByMemberIdAndLectureId(Integer memberId, Integer lectureId);

    LectureNoteInfo findByMemberIdAndLectureId(Integer memberId, Integer lectureId);

    Optional<LectureNoteInfo> existsByMemberIdAndLectureIdAndCanvasDataPageNum(Integer memberId, Integer lectureId, Integer pageNum);

    Optional<LectureNoteInfo> findByMemberIdAndLectureIdAndCanvasDataPageNum(int memberId, Lecture lecture, int pageNum);
}
