package com.eefy.homework.domain.homework.service;

import com.eefy.homework.domain.homework.dto.request.MakeHomeworkRequest;
import com.eefy.homework.domain.homework.dto.response.MakeHomeworkResponse;
import com.eefy.homework.domain.homework.persistence.entity.Homework;
import com.eefy.homework.domain.homework.repository.HomeworkRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class HomeworkServiceImpl implements HomeworkService {

//    private final ModelMapper modelMapper;
    private final HomeworkRepository homeworkRepository;

    @Override
    public MakeHomeworkResponse makeHomework(MakeHomeworkRequest makeHomeworkRequest) {
        // todo:강사가 유효한 사용자인지 검증
        Homework homework =
            Homework.of(makeHomeworkRequest.getMemberId(), makeHomeworkRequest.getTitle(),
                makeHomeworkRequest.getContent(), makeHomeworkRequest.getType());

        homeworkRepository.save(homework);

        return MakeHomeworkResponse.builder()
            .HomeworkId(homework.getId())
            .build();
    }
}
