package com.eefy.studyclass.domain.alarm.dto.request;

import lombok.Builder;
import lombok.Getter;

import java.util.ArrayList;

@Getter
public class StudentIdsRequest {
    private ArrayList<Integer> studentIds;

    @Builder
    public StudentIdsRequest(ArrayList<Integer> studentIds) {
        this.studentIds = studentIds;
    }
}
