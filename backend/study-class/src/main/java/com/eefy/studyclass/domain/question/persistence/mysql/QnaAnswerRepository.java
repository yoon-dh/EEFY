package com.eefy.studyclass.domain.question.persistence.mysql;

import com.eefy.studyclass.domain.question.persistence.entity.QnaAnswer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QnaAnswerRepository extends JpaRepository<QnaAnswer, Integer> {

    void deleteAllByQuestionId(int questionId);

    List<QnaAnswer> findByQuestionId(int questionId);
}
