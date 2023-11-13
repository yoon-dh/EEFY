package com.eefy.homework.domain.homework.repository;

import static com.eefy.homework.domain.homework.persistence.entity.QChoice.choice;
import static com.eefy.homework.domain.homework.persistence.entity.QClassHomework.classHomework;
import static com.eefy.homework.domain.homework.persistence.entity.QHomework.homework;
import static com.eefy.homework.domain.homework.persistence.entity.QHomeworkQuestion.homeworkQuestion;
import static com.eefy.homework.domain.homework.persistence.entity.QHomeworkStudent.homeworkStudent;
import static com.eefy.homework.domain.homework.persistence.entity.QHomeworkStudentQuestion.homeworkStudentQuestion;

import com.eefy.homework.domain.homework.dto.HomeworkDto;
import com.eefy.homework.domain.homework.dto.HomeworkStudentDto;
import com.eefy.homework.domain.homework.dto.QHomeworkDto;
import com.eefy.homework.domain.homework.dto.QHomeworkQuestionDto;
import com.eefy.homework.domain.homework.dto.QHomeworkStudentDto;
import com.eefy.homework.domain.homework.dto.QQuestionCountDto;
import com.eefy.homework.domain.homework.dto.QuestionCountDto;
import com.eefy.homework.domain.homework.persistence.entity.HomeworkQuestion;
import com.eefy.homework.domain.homework.persistence.entity.enums.HomeworkType;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class HomeworkCustomRepository {

    private final JPAQueryFactory jpaQueryFactory;

    public Page<HomeworkDto> getHomework(Integer memberId, Pageable pageable, HomeworkType type,
        String searchWord) {

        List<HomeworkDto> content = jpaQueryFactory
            .select(
                new QHomeworkDto(
                    homework.id,
                    homework.memberId,
                    homework.title,
                    homework.content,
                    homework.type,
                    homework.isFinish,
                    homework.createdAt,
                    homework.modifiedAt
                )
            )
            .from(homework)
            .where(
                homework.memberId.eq(memberId),
                homeworkTypeEq(type),
                homeworkTitleContain(searchWord)
            )
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .orderBy(homework.modifiedAt.desc())
            .fetch();

        long total = jpaQueryFactory
            .select(homework.count())
            .from(homework)
            .where(
                homework.memberId.eq(memberId),
                homeworkTypeEq(type),
                homeworkTitleContain(searchWord)
            )
            .fetchOne();

        return new PageImpl<>(content, pageable, total);
    }

    public List<HomeworkQuestion> getProblem(Integer classHomeworkId) {
        return
            jpaQueryFactory
                .selectFrom(homeworkQuestion)
                .join(homework).on(homework.id.eq(homeworkQuestion.homework.id))
                .join(classHomework).on(homework.id.eq(classHomework.homework.id))
                .leftJoin(homeworkQuestion.choices, choice).fetchJoin()
                .where(classHomework.id.eq(classHomeworkId))
                .distinct()
                .fetch();
    }

    public List<QuestionCountDto> getHomeworkProblemCount(Integer classId, Integer memberId) {
        return
            jpaQueryFactory.select(
                    new QQuestionCountDto(
                        homeworkStudent.id,
                        homeworkQuestion.count()
                    ))
                .from(homework)
                .join(classHomework)
                .on(classHomework.homework.eq(homework))
                .join(homeworkStudent)
                .on(homeworkStudent.classHomework.eq(classHomework))
                .join(homeworkQuestion)
                .on(homeworkQuestion.homework.eq(homework))
                .where(classIdEq(classId), homeworkStudent.memberId.eq(memberId))
                .groupBy(homeworkStudent)
                .fetch();
    }

    public List<QuestionCountDto> getSolvedHomeworkProblemCount(Integer classId, Integer memberId) {
        return
            jpaQueryFactory.select(
                    new QQuestionCountDto(
                        homeworkStudent.id,
                        homeworkStudentQuestion.count()
                    ))
                .from(classHomework)
                .join(homeworkStudent)
                .on(homeworkStudent.classHomework.eq(classHomework))
                .join(homeworkStudentQuestion)
                .on(homeworkStudentQuestion.homeworkStudent.eq(homeworkStudent))
                .where(
                    classIdEq(classId),
                    homeworkStudent.memberId.eq(memberId))
                .groupBy(homeworkStudent)
                .fetch();
    }

    public List<HomeworkStudentDto> viewHomeworkByStudentId(Integer classId, Integer memberId) {

        return jpaQueryFactory.select(new QHomeworkStudentDto(
                homeworkStudent.id,
                homeworkStudent.memberId,
                homeworkStudent.classHomework.id,
                homeworkStudent.doneDate,
                homework.title
            ))
            .from(homeworkStudent)
            .join(homeworkStudent.classHomework, classHomework)
            .join(classHomework.homework, homework)
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

    private BooleanExpression homeworkTitleContain(String searchWord) {
        return searchWord == null ? null : homework.title.contains(searchWord);
    }

    private BooleanExpression homeworkTypeEq(HomeworkType type) {
        return type == null ? null : homework.type.eq(type);
    }
}
