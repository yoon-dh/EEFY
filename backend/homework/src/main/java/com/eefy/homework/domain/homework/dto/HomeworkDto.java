package com.eefy.homework.domain.homework.dto;

import com.eefy.homework.domain.homework.persistence.entity.enums.HomeworkType;
import com.querydsl.core.annotations.QueryProjection;
import java.time.LocalDateTime;
import javax.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

@Data
@NoArgsConstructor
public class HomeworkDto {

    private Integer id;
    private Integer memberId;
    private String title;
    private String content;
    private HomeworkType type;
    private Boolean isFinish;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    @QueryProjection
    public HomeworkDto(Integer id, Integer memberId, String title, String content,
        HomeworkType type,
        Boolean isFinish, LocalDateTime createdAt, LocalDateTime modifiedAt) {
        this.id = id;
        this.memberId = memberId;
        this.title = title;
        this.content = content;
        this.type = type;
        this.isFinish = isFinish;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }
}
