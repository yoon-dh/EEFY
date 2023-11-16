package com.eefy.homework.domain.homework.dto.response;

import com.eefy.homework.domain.homework.dto.HomeworkStudentDto;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ViewHomeworkResponse {

    private PageInfo pageInfo;
    private List<HomeworkStudentDto> homeworks;

    public static ViewHomeworkResponse of(PageInfo pageInfo, List<HomeworkStudentDto> homeworks){
        return new ViewHomeworkResponse(pageInfo, homeworks);
    }
}
