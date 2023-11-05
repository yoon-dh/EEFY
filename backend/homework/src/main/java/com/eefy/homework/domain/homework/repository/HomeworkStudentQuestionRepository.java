package com.eefy.homework.domain.homework.repository;

import com.eefy.homework.domain.homework.persistence.entity.HomeworkStudentQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HomeworkStudentQuestionRepository extends
    JpaRepository<HomeworkStudentQuestion, Integer> {

}
