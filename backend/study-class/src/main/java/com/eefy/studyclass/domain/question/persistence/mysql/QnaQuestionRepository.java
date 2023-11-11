package com.eefy.studyclass.domain.question.persistence.mysql;

import com.eefy.studyclass.domain.member.persistence.entity.Member;
import com.eefy.studyclass.domain.question.persistence.entity.QnaQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;


public interface QnaQuestionRepository extends JpaRepository<QnaQuestion, Integer> {
    List<QnaQuestion> findByStudyClassId(int classId);

    List<QnaQuestion> findByMemberIdAndStudyClassId(Member member, int classId);

//    @Query("select q from QnaQuestion q join fetch q.memberId where q.id = :questionId")
//    Optional<QnaQuestion> findByIdWithMember(int questionId);
}

