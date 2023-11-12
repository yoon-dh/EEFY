package com.eefy.studyclass.domain.lecture.dto.response;

import com.eefy.studyclass.domain.lecture.persistence.entity.Lecture;
import com.eefy.studyclass.domain.member.persistence.entity.Member;
import lombok.Getter;
import java.time.LocalDateTime;

@Getter
public class LectureResponse {
    private Integer id;
    private Integer memberId;
    private String nickname;
    private String profileImgPath;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String title;
    private String content;

    public LectureResponse(Lecture lecture, Member member) {
        this.id = lecture.getId();
        this.memberId = lecture.getMemberId();
        this.nickname = member.getNickname();
        this.profileImgPath = member.getProfileImagePath();
        this.createdAt = lecture.getCreatedAt();
        this.updatedAt = lecture.getUpdatedAt();
        this.title = lecture.getTitle();
        this.content = lecture.getContent();
    }
}
