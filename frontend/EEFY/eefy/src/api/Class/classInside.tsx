'use client';
import { privateApi } from '..';

// 해당 클래스 학생 조회
export const classInsideStudent = async (Id: number) => {
  try {
    const params = {
      classId: Id,
    };

    const res = await privateApi.get('/study-class/member', { params });

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};

// 학생 검색
export const searchStudents = async (type: string, keyword: string, Id: number) => {
  try {
    const params = {
      key: type,
      value: keyword,
      classId: Id,
    };

    const response = await privateApi.get('/member/tutor', { params });

    return response.data;
  } catch (err) {
    console.error(err);
  }
};
