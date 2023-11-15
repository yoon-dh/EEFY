'use client';
import { privateApi } from '..';

// 학생 - 클래스를 기준으로 과제 불러오기, 클래스에 null이면 전체 과제 조회
export const getHomeworkView = async (data: any) => {
  try {
    const res = await privateApi.get('/homework/view', { params: data });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
