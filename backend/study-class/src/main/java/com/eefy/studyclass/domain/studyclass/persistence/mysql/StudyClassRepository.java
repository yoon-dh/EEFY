package com.eefy.studyclass.domain.studyclass.persistence.mysql;

import com.eefy.studyclass.domain.studyclass.persistence.entity.StudyClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudyClassRepository extends JpaRepository<StudyClass, Integer> {
    List<StudyClass> findByMemberId(Integer memberId);

    @Query("SELECT s FROM StudyClass s LEFT JOIN s.participateList p where p.memberId = :memberId")
    List<StudyClass> findByStudentId(Integer memberId);
}
