package com.eefy.homework.domain.homework.repository;

import com.eefy.homework.domain.homework.persistence.entity.Choice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChoiceRepository extends JpaRepository<Choice, Integer> {

}
