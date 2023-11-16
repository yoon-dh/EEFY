package com.eefy.studyclass.domain.question.persistence.mysql;

import com.eefy.studyclass.domain.question.persistence.entity.QnaQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface QnaQuestionRepository extends JpaRepository<QnaQuestion, Integer> {
    List<QnaQuestion> findByStudyClassIdOrderByCreatedAtDesc(int classId);
    List<QnaQuestion> findByMemberIdAndStudyClassIdOrderByCreatedAtDesc(Integer memberId, int classId);
}

