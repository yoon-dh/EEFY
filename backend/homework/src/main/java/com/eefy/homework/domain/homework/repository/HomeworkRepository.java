package com.eefy.homework.domain.homework.repository;

import com.eefy.homework.domain.homework.persistence.entity.Homework;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HomeworkRepository extends JpaRepository<Homework, Integer> {

}
