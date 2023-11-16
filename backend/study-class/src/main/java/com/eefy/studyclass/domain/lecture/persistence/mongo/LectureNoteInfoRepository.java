package com.eefy.studyclass.domain.lecture.persistence.mongo;

import com.eefy.studyclass.domain.lecture.persistence.entity.LectureNoteInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.ArrayList;

public interface LectureNoteInfoRepository extends MongoRepository<LectureNoteInfo, String> {

    ArrayList<LectureNoteInfo> findByMemberIdAndLectureId(Integer memberId, Integer lectureId);

    ArrayList<LectureNoteInfo> findByMemberIdAndLectureIdAndCanvasDataPageNum(int memberId, Integer lecture, int pageNum);
}
