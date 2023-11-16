'use client';
import { privateApi } from '..';

// 학생 초대
interface InviteStudentsdata {
  classId: number;
  memberList: any;
}

export const InviteStudents = async (data: InviteStudentsdata) => {
  try {
    const res = await privateApi.post('/study-class/tutor/member', data);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// 학생 클래스 구독

export const SubscribeStudents = async (classId: number, studentIdArr: any) => {
  try {
    console.log(studentIdArr);
    const res = await privateApi.post(`/alarm/${classId}`, studentIdArr);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
