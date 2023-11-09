package com.eefy.homework.domain.homework.service;

import com.eefy.homework.domain.homework.dto.request.AssignHomeworkToClassRequest;
import com.eefy.homework.domain.homework.dto.request.MakeHomeworkQuestionRequest;
import com.eefy.homework.domain.homework.dto.request.MakeHomeworkRequest;
import com.eefy.homework.domain.homework.dto.request.SolveProblemRequest;
import com.eefy.homework.domain.homework.dto.request.ViewHomeworkRequest;
import com.eefy.homework.domain.homework.dto.response.AssignHomeworkToClassResponse;
import com.eefy.homework.domain.homework.dto.response.GetProblemResponse;
import com.eefy.homework.domain.homework.dto.response.MakeHomeworkQuestionResponse;
import com.eefy.homework.domain.homework.dto.response.MakeHomeworkResponse;
import com.eefy.homework.domain.homework.dto.response.SolveHomeworkResponse;
import com.eefy.homework.domain.homework.dto.response.SolveProblemResponse;
import com.eefy.homework.domain.homework.dto.response.ViewHomeworkResponse;
import java.io.IOException;
import org.springframework.web.multipart.MultipartFile;

public interface HomeworkService {

    MakeHomeworkResponse makeHomework(MakeHomeworkRequest makeHomeworkRequest, Integer memberId);

    MakeHomeworkQuestionResponse makeQuestion(
        MakeHomeworkQuestionRequest makeHomeworkQuestionRequest, Integer memberId, MultipartFile voiceFile)
        throws IOException;

    AssignHomeworkToClassResponse assignHomeworkToClass(
        AssignHomeworkToClassRequest assignHomeworkToClassRequest, Integer memberId);

    ViewHomeworkResponse viewHomeworkByStudentId(ViewHomeworkRequest viewHomeworkRequest,
        Integer memberId);

    GetProblemResponse getProblem(Integer classHomeworkId, Integer memberId);

    SolveProblemResponse solveProblem(SolveProblemRequest solveProblemRequest, Integer memberId);

    SolveHomeworkResponse solveHomework(Integer homeworkStudentId, Integer memberId);
}
