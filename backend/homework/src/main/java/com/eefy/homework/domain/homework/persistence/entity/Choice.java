package com.eefy.homework.domain.homework.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
public class Choice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "choice_id")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "homework_question_id")
    private HomeworkQuestion homeworkQuestion;

    @Column(nullable = false, length = 4000)
    private String content;

    @Column(nullable = false, length = 10)
    private String number;

    @Override
    public String toString() {
        return "Choice{" +
            "id=" + id +
            ", content='" + content + '\'' +
            ", number='" + number + '\'' +
            '}';
    }

    public static Choice of(HomeworkQuestion homeworkQuestion, String content, String number) {
        return Choice.builder()
            .homeworkQuestion(homeworkQuestion)
            .content(content)
            .number(number)
            .build();
    }
}
