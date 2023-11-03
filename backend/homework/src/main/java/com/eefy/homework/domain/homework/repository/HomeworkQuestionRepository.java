package com.eefy.homework.domain.homework.repository;

import com.eefy.homework.domain.homework.persistence.entity.HomeworkQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HomeworkQuestionRepository extends JpaRepository<HomeworkQuestion, Integer> {

}
