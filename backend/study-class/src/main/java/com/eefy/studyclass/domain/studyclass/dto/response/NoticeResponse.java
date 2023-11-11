package com.eefy.studyclass.domain.studyclass.dto.response;

import com.eefy.studyclass.domain.member.persistence.entity.Member;
import com.eefy.studyclass.domain.studyclass.persistence.entity.Notice;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class NoticeResponse {
    private Integer id;
    private Integer memberId;
    private String name;
    private String nickname;
    private String profileImagePath;
    private String title;
    private String content;
    private Integer hit;
    private LocalDateTime createAt;
    private LocalDateTime updatedAt;

    public NoticeResponse(Notice notice, Member member) {
        this.id = notice.getId();
        this.memberId = member.getMemberId();
        this.name = member.getName();
        this.nickname = member.getNickname();
        this.profileImagePath = member.getProfileImagePath();
        this.title = notice.getTitle();
        this.content = notice.getContent();
        this.hit = notice.getHit();
        this.createAt = notice.getCreatedAt();
        this.updatedAt = notice.getUpdatedAt();
    }
}
