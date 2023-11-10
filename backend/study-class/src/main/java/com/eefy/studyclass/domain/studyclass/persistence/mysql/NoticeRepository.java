package com.eefy.studyclass.domain.studyclass.persistence.mysql;

import com.eefy.studyclass.domain.studyclass.persistence.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<Notice, Integer> {
}
