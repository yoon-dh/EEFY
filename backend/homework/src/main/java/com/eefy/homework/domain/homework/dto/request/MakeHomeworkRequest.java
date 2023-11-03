package com.eefy.homework.domain.homework.dto.request;

import com.eefy.homework.domain.homework.persistence.entity.enums.HomeworkType;
import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@ToString
public class MakeHomeworkRequest {

    private String title;
    private String content;
    private HomeworkType type;

}
