package com.eefy.studyclass.domain.lecture.persistence.entity;

import com.eefy.studyclass.domain.lecture.dto.request.PathRequest;
import lombok.Getter;

@Getter
public class Path {
    private Double x;
    private Double y;

    public Path(PathRequest pathRequest) {
        this.x = pathRequest.getX();
        this.y = pathRequest.getY();
    }
}
