package com.eefy.studyclass.domain.studyclass.persistence.mysql;

import com.eefy.studyclass.domain.studyclass.persistence.entity.StudyClass;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface StudyClassRepository extends JpaRepository<StudyClass, Integer> {
    List<StudyClass> findByMemberIdOrderByCreatedAtDesc(Pageable pageable, Integer memberId);

    @Query("SELECT s FROM StudyClass s LEFT JOIN s.participateList p where p.memberId = :memberId ORDER BY s.createdAt DESC")
    List<StudyClass> findByStudentIdOrderByCreatedAtDesc(Pageable pageable, Integer memberId);

    Optional<StudyClass> findByIdAndMemberId(Integer classId, Integer memberId);
}
