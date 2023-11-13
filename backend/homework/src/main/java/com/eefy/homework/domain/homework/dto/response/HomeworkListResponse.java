package com.eefy.homework.domain.homework.dto.response;

import com.eefy.homework.domain.homework.dto.HomeworkDto;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class HomeworkListResponse {

    private PageInfo pageInfo;
    private List<HomeworkDto> homeworkDtos;

    public static HomeworkListResponse of(List<HomeworkDto> homeworkDtos, PageInfo pageInfo) {
        return new HomeworkListResponse(pageInfo, homeworkDtos);
    }
}
