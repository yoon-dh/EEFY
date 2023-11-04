package com.eefy.homework.domain.homework.repository;

import static com.eefy.homework.domain.homework.persistence.entity.QClassHomework.classHomework;
import static com.eefy.homework.domain.homework.persistence.entity.QHomework.homework;
import static com.eefy.homework.domain.homework.persistence.entity.QHomeworkQuestion.homeworkQuestion;
import static com.eefy.homework.domain.homework.persistence.entity.QHomeworkStudent.homeworkStudent;

import com.eefy.homework.domain.homework.dto.HomeworkQuestionDto;
import com.eefy.homework.domain.homework.dto.HomeworkStudentDto;
import com.eefy.homework.domain.homework.dto.QHomeworkQuestionDto;
import com.eefy.homework.domain.homework.dto.QHomeworkStudentDto;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class HomeworkCustomRepository {

    private final JPAQueryFactory jpaQueryFactory;

    public List<HomeworkQuestionDto> getProblem(Integer classHomeworkId) {
        return jpaQueryFactory.select(
                new QHomeworkQuestionDto(
                    homeworkQuestion.id,
                    homeworkQuestion.homework.id,
                    homeworkQuestion.title,
                    homeworkQuestion.content,
                    homeworkQuestion.filePath,
                    homeworkQuestion.field,
                    homeworkQuestion.answer
                )
            ).from(homeworkQuestion)
            .join(homework).on(homework.id.eq(homeworkQuestion.homework.id))
            .join(classHomework).on(homework.id.eq(classHomework.homework.id))
            .where(classHomework.id.eq(classHomeworkId))
            .fetch();
    }

    public List<HomeworkStudentDto> viewHomeworkByStudentId(Integer classId, Integer memberId) {
        return jpaQueryFactory.select(new QHomeworkStudentDto(
                homeworkStudent.id,
                homeworkStudent.memberId,
                homeworkStudent.classHomework.id,
                homeworkStudent.doneDate,
                homeworkStudent.progressRate
            ))
            .from(homeworkStudent)
            .join(homeworkStudent.classHomework, classHomework)
            .where(classIdEq(classId),
                memberIdEq(memberId))
            .fetch();
    }

    private static BooleanExpression memberIdEq(Integer memberId) {
        return homeworkStudent.memberId.eq(memberId);
    }

    private static BooleanExpression classIdEq(Integer classId) {
        return classId == null ? null : classHomework.classId.eq(classId);
    }

}
