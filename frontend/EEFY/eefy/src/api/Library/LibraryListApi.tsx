'use client';
import { privateApi } from '..';

// 페이지네이션
export const getHomeworkList = async (data: any) => {
  try {
    const res = await privateApi.get('/homework/teacher/homework', { params: data });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 파일 업로드 시 STT 요청
export const postSTT = async (data: FormData) => {
  try {
    const res = await privateApi.post('/ai/stt', data, { headers: { 'Content-Type': 'multipart/form-data' } });
    return res.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};
