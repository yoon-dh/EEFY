package com.eefy.homework.domain.homework.persistence.entity;

import com.eefy.homework.global.entity.BaseEntity;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class HomeworkStudent extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "homework_student_id")
    private Integer id;

    @Column(nullable = false)
    private Integer memberId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "class_homework_id")
    private ClassHomework classHomework;

    @Column(nullable = true)
    private LocalDateTime doneDate;

    @OneToMany(mappedBy = "homeworkStudent")
    List<HomeworkStudentQuestion> homeworkStudentQuestions = new ArrayList<>();

    public HomeworkStudentQuestion isQuestionSolved(Integer questionId) {
        for (HomeworkStudentQuestion homeworkStudentQuestion : homeworkStudentQuestions) {
            if (homeworkStudentQuestion.getHomeworkQuestion().getId().equals(questionId)) {
                return homeworkStudentQuestion;
            }
        }
        return null;
    }

    public HomeworkStudent(Integer memberId, ClassHomework classHomework) {
        this.memberId = memberId;
        this.classHomework = classHomework;
    }

    public static HomeworkStudent from(Integer memberId, ClassHomework classHomework) {
        return new HomeworkStudent(memberId, classHomework);
    }

    public void updateDoneDate() {
        this.doneDate = LocalDateTime.now();
    }
}
