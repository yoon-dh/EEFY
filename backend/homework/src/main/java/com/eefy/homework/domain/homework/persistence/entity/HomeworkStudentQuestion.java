package com.eefy.homework.domain.homework.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@AllArgsConstructor
@Builder
@DynamicInsert
public class HomeworkStudentQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "homework_student_question_id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private HomeworkQuestion homeworkQuestion;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private HomeworkStudent homeworkStudent;

    @Column(nullable = false)
    private String submitAnswer;

    private String filePath;

    @ColumnDefault("0")
    private Integer score;

    private String feedback;

    public static HomeworkStudentQuestion from(
        HomeworkQuestion homeworkQuestion, HomeworkStudent homeworkStudent, String submitAnswer,
        String filePath
    ) {

        return HomeworkStudentQuestion.builder()
            .homeworkQuestion(homeworkQuestion)
            .homeworkStudent(homeworkStudent)
            .submitAnswer(submitAnswer)
            .filePath(filePath)
            .build();
    }
}
