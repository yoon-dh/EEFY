package com.eefy.studyclass.domain.studyclass.persistence.mysql;

import com.eefy.studyclass.domain.studyclass.persistence.entity.StudyClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface StudyClassRepository extends JpaRepository<StudyClass, Integer> {
    List<StudyClass> findByMemberId(Integer memberId);

    @Query("SELECT s FROM StudyClass s LEFT JOIN s.participateList p where p.memberId = :memberId")
    List<StudyClass> findByStudentId(Integer memberId);

    @Modifying(clearAutomatically = true)
    @Query("update StudyClass s set s.classTitle=:title, s.classContent=:content, s.type=:type, s.startDate=:startDate, s.endDate=:endDate")
    void updateStudyClass(String title, String content, String type, LocalDateTime startDate, LocalDateTime endDate);
}
