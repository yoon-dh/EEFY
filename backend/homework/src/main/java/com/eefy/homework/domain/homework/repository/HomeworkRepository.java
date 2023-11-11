package com.eefy.homework.domain.homework.repository;

import com.eefy.homework.domain.homework.persistence.entity.Homework;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HomeworkRepository extends JpaRepository<Homework, Integer> {

    List<Homework> findByMemberId(Integer memberId);
}
