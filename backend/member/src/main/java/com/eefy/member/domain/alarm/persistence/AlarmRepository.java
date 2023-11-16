package com.eefy.member.domain.alarm.persistence;

import com.eefy.member.domain.alarm.persistence.entity.Alarm;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AlarmRepository extends JpaRepository<Alarm, Integer> {
    Optional<Alarm> findByClassId(int classId);
}
