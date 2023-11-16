package com.eefy.member.domain.alarm.persistence;

import com.eefy.member.domain.alarm.persistence.entity.Alarm;
import com.eefy.member.domain.alarm.persistence.entity.ClassSubscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface ClassSubscriptionRepository extends JpaRepository<ClassSubscription, Integer> {
    @Query("select c from ClassSubscription c join fetch c.member where c.alarm = :alarm")
    List<ClassSubscription> findByAlarmWithMember(@RequestParam("alarm") Alarm alarm);
    void deleteAllByAlarm(Alarm alarm);
}
