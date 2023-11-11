package com.eefy.studyclass.domain.studyclass.persistence.mysql;


import com.eefy.studyclass.domain.studyclass.persistence.entity.Lecture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LectureRepository extends JpaRepository<Lecture, Integer> {
    List<Lecture> findByStudyClassId(int classId);
}
