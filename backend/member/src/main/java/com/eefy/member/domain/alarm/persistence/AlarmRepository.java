package com.eefy.member.domain.alarm.persistence;

import com.eefy.member.domain.alarm.persistence.entity.Alarm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlarmRepository extends JpaRepository<Alarm, Integer> {
}
