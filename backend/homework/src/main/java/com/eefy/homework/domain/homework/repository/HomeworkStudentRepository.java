package com.eefy.homework.domain.homework.repository;

import com.eefy.homework.domain.homework.persistence.entity.HomeworkStudent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HomeworkStudentRepository extends JpaRepository<HomeworkStudent, Integer> {

}
