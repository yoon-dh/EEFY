package com.eefy.homework.domain.homework.persistence.entity;

import com.eefy.homework.domain.homework.persistence.entity.enums.HomeworkType;
import com.eefy.homework.global.entity.BaseEntity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
public class Homework extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "homework_id")
    private Integer id;

    @Column(nullable = false)
    private Integer memberId;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false, length = 4000)
    private String content;

    @Column(nullable = false, length = 200)
    @Enumerated(EnumType.STRING)
    private HomeworkType type;

    public static Homework of(Integer memberId, String title, String content, HomeworkType type) {
        return Homework.builder()
            .memberId(memberId)
            .title(title)
            .content(content)
            .type(type)
            .build();
    }
}
