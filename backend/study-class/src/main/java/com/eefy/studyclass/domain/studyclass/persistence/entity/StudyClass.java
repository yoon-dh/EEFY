package com.eefy.studyclass.domain.studyclass.persistence.entity;

import com.eefy.studyclass.domain.studyclass.dto.request.StudyClassModifyRequest;
import com.eefy.studyclass.domain.studyclass.persistence.entity.enums.StudyTypeEnum;
import com.eefy.studyclass.global.entity.BaseEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access =  AccessLevel.PROTECTED)
public class StudyClass extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "class_id")
    private Integer id;

    @Column(nullable = false)
    private Integer memberId;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false, length = 2000)
    private String content;

    @Column(nullable = false)
    private LocalDateTime startDate;

    @Column(nullable = true)
    @Enumerated(EnumType.STRING)
    private StudyTypeEnum type;

    @OneToMany(mappedBy = "studyClass")
    private List<Participate> participateList;

    @Formula("(select count(*) from participate where participate.class_id = class_id)")
    private Integer studentCnt;

    @Builder
    public StudyClass(Integer id, Integer memberId, String title, String content, LocalDateTime startDate, StudyTypeEnum type, List<Participate> participateList, Integer studentCnt) {
        this.id = id;
        this.memberId = memberId;
        this.title = title;
        this.content = content;
        this.startDate = startDate;
        this.type = type;
        this.participateList = participateList;
        this.studentCnt = studentCnt;
    }

    public void updateStudyClassInfo(StudyClassModifyRequest studyClassModifyRequest) {
        this.title = studyClassModifyRequest.getTitle();
        this.content = studyClassModifyRequest.getContent();
        this.startDate = studyClassModifyRequest.getStartDate();
        this.type = StudyTypeEnum.valueOf(studyClassModifyRequest.getType());
    }
}
