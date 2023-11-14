package com.eefy.studyclass.domain.lecture.persistence.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class Path {
    private Double x;
    private Double y;

    public Path(Path path) {
        this.x = path.x;
        this.y = path.y;
    }
}
