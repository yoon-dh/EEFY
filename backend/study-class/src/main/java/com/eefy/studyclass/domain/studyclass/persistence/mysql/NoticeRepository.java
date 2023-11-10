package com.eefy.studyclass.domain.studyclass.persistence.mysql;

import com.eefy.studyclass.domain.studyclass.persistence.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NoticeRepository extends JpaRepository<Notice, Integer> {
    List<Notice> findByStudyClassId(Integer classId);

    @Modifying
    @Query("UPDATE Notice n set n.hit = n.hit + 1 WHERE n.id = :noticeId")
    void updateHit(Integer noticeId);
}
