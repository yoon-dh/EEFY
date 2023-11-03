package com.eefy.homework.domain.homework.persistence.entity;

import com.eefy.homework.domain.homework.persistence.entity.enums.HomeworkQuestionType;
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
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Builder
@AllArgsConstructor
public class HomeworkQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "homework_question_id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "homework_id")
    private Homework homework;

    @Column(nullable = false, length = 4000)
    private String title;

    @Column(nullable = false, length = 4000)
    private String content;

    @Column(nullable = false, length = 4000)
    private String filePath;

    @Column(nullable = false, length = 200)
    private HomeworkQuestionType field;

    @Column(nullable = true, length = 500)
    private String answer;

    public static HomeworkQuestion of(Homework homework, String title, String content,
        String filePath, HomeworkQuestionType field, String answer) {

        return HomeworkQuestion.builder()
            .homework(homework)
            .title(title)
            .content(content)
            .filePath(filePath)
            .field(field)
            .answer(answer)
            .build();
    }
}
