package com.eefy.homework.domain.homework.service;

import com.eefy.homework.domain.homework.dto.HomeworkDto;
import com.eefy.homework.domain.homework.dto.request.AssignHomeworkToClassRequest;
import com.eefy.homework.domain.homework.dto.request.MakeHomeworkQuestionRequest;
import com.eefy.homework.domain.homework.dto.request.MakeHomeworkRequest;
import com.eefy.homework.domain.homework.dto.request.SolveProblemRequest;
import com.eefy.homework.domain.homework.dto.request.ViewHomeworkRequest;
import com.eefy.homework.domain.homework.dto.response.AssignHomeworkToClassResponse;
import com.eefy.homework.domain.homework.dto.response.GetProblemResponse;
import com.eefy.homework.domain.homework.dto.response.HomeworkListResponse;
import com.eefy.homework.domain.homework.dto.response.MakeHomeworkQuestionResponse;
import com.eefy.homework.domain.homework.dto.response.MakeHomeworkResponse;
import com.eefy.homework.domain.homework.dto.response.SolveHomeworkResponse;
import com.eefy.homework.domain.homework.dto.response.SolveProblemResponse;
import com.eefy.homework.domain.homework.dto.response.ViewHomeworkResponse;
import com.eefy.homework.domain.homework.persistence.entity.enums.HomeworkType;
import java.io.IOException;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

public interface HomeworkService {

    MakeHomeworkResponse makeHomework(MakeHomeworkRequest makeHomeworkRequest, Integer memberId);

    MakeHomeworkQuestionResponse makeQuestion(
        MakeHomeworkQuestionRequest makeHomeworkQuestionRequest, Integer memberId,
        MultipartFile voiceFile)
        throws IOException;

    AssignHomeworkToClassResponse assignHomeworkToClass(
        AssignHomeworkToClassRequest assignHomeworkToClassRequest, Integer memberId);

    ViewHomeworkResponse viewHomeworkByStudentId(ViewHomeworkRequest viewHomeworkRequest,
        Integer memberId);

    GetProblemResponse getProblem(Integer classHomeworkId, Integer memberId);

    SolveProblemResponse solveProblem(SolveProblemRequest solveProblemRequest, Integer memberId,
        MultipartFile voiceFile) throws IOException;

    SolveHomeworkResponse solveHomework(Integer homeworkStudentId, Integer memberId);

    HomeworkListResponse getHomeworkByTeacherId(Integer memberId, Pageable pageable,
        HomeworkType type);

    MakeHomeworkResponse finishMakingHomework(Integer memberId, Integer homeworkId);
}
