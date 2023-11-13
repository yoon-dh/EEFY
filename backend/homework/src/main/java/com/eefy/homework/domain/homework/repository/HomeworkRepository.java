package com.eefy.homework.domain.homework.repository;

import com.eefy.homework.domain.homework.persistence.entity.Homework;
import com.eefy.homework.domain.homework.persistence.entity.enums.HomeworkType;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HomeworkRepository extends JpaRepository<Homework, Integer> {

    Page<Homework> findByMemberId(Integer memberId, Pageable pageable);

    Page<Homework> findByMemberIdAndType(Integer memberId, Pageable pageable,
        HomeworkType homeworkType);
}
