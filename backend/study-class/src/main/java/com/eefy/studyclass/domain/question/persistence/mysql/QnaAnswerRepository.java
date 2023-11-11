package com.eefy.studyclass.domain.question.persistence.mysql;

import com.eefy.studyclass.domain.question.persistence.entity.QnaAnswer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QnaAnswerRepository extends JpaRepository<QnaAnswer, Integer> {
}
