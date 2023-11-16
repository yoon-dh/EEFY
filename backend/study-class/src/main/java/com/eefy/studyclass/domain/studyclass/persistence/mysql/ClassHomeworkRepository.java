package com.eefy.studyclass.domain.studyclass.persistence.mysql;

import com.eefy.studyclass.domain.studyclass.persistence.entity.ClassHomework;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassHomeworkRepository extends JpaRepository<ClassHomework, Integer> {
}
