'use client';
import { privateApi } from '..';

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
