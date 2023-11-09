'use client';
import { privateApi } from '..';

// 학생 검색
export const searchStudents = async (type: string, keyword: string) => {
  try {
    const params = {
      key: type,
      value: keyword,
    };

    const response = await privateApi.get('/member/tutor', { params });

    // 요청 결과 출력
    console.log('Response:', response.data);

    return response.data;
  } catch (err) {
    console.error(err);
  }
};
