package com.eefy.studyclass.domain.lecture.persistence.mongo;

import com.eefy.studyclass.domain.lecture.persistence.entity.LectureNoteInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LectureNoteInfoRepository extends MongoRepository<LectureNoteInfo, String> {
    boolean existsByMemberIdAndLectureId(Integer memberId, Integer lectureId);
}
