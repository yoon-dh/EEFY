package com.eefy.studyclass.domain.studyclass.service;

import com.eefy.studyclass.domain.studyclass.dto.request.*;
import com.eefy.studyclass.domain.studyclass.dto.response.NoticeListResponse;
import com.eefy.studyclass.domain.studyclass.dto.response.NoticeResponse;
import com.eefy.studyclass.domain.studyclass.dto.response.SearchStudentResponse;
import com.eefy.studyclass.domain.studyclass.dto.response.StudyClassListResponse;
import com.eefy.studyclass.domain.studyclass.persistence.entity.Participate;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface StudyClassService {
    StudyClassListResponse getStudyClassList(Pageable pageable, Integer memberId);
    void createStudyClass(Integer memberId, StudyClassCreateRequest studyClassCreateRequest);
    void modifyStudyClass(StudyClassModifyRequest studyClassModifyRequest);
    List<SearchStudentResponse> searchStudentList(Integer teacherId, Integer classId);
    List<SearchStudentResponse> getSearchStudentList(Integer teacherId, List<Participate> participateList);
    void inviteMember(Integer memberId, InviteMemberRequest inviteMemberRequest);
    void disInviteMember(Integer memberId, InviteMemberRequest disInviteMemberRequest);
    void enrollHomework(Integer teacherId, EnrollHomeworkRequest enrollHomeworkRequest);
    void createNotice(Integer teacherId, NoticeCreateRequest noticeCreateRequest);
    List<NoticeListResponse> getNoticeList(Integer classId);
    NoticeResponse getNoticeInfo(Integer noticeId);
    void modifyNotice(Integer teacherId, NoticeModifyRequest noticeModifyRequest);
    void deleteNotice(Integer teacherId, Integer noticeId);
}
