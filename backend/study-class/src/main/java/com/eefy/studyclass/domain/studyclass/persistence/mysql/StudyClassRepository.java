package com.eefy.studyclass.domain.studyclass.persistence.mysql;

import com.eefy.studyclass.domain.studyclass.persistence.entity.StudyClass;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface StudyClassRepository extends JpaRepository<StudyClass, Integer> {
    List<StudyClass> findByMemberId(Pageable pageable, Integer memberId);

    @Query("SELECT s FROM StudyClass s LEFT JOIN s.participateList p where p.memberId = :memberId")
    List<StudyClass> findByStudentId(Pageable pageable, Integer memberId);

    boolean existsByMemberId(Integer teacherId);

    boolean existsByIdAndMemberId(Integer classId, Integer teacherId);

    Optional<StudyClass> findByIdAndMemberId(Integer classId, Integer memberId);
}
