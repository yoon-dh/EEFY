package com.eefy.member.domain.member.persistence.mysql;

import com.eefy.member.domain.member.persistence.entity.Lecture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureRepository extends JpaRepository<Lecture, Integer> {
}
