'use client';
import { privateApi } from '..';

interface postMakeHomeworkDataType {
  title: string;
  content: string;
  type: string;
}

interface putMakeHomeworkDataType {
  homeworkId: number;
}

// 공통
// 과제 만들기
export const postMakeHomework = async (data: postMakeHomeworkDataType) => {
  try {
    const res = await privateApi.post('/homework/make', data);
    return res.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};

// 과제 만들기 완료
export const putMakeHomework = async (data: putMakeHomeworkDataType) => {
  try {
    console.log('과제 완료 진입');
    const res = await privateApi.put('/homework/make', data);
    console.log('과제 완료 성공', res);
    return;
  } catch (err) {
    console.error(err);
    return false;
  }
};

// 만든 과제 확인
export const getHomeworkMakeQuestion = async (data: any) => {
  try {
    console.log('만든 과제 확인 진입');
    const res = await privateApi.get('/homework/teacher/homework', { params: data });
    console.log('만든 과제 확인 성공', res);
    return res.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};

// Speaking
// 파일 업로드 시 STT 요청
export const postSTT = async (data: FormData) => {
  try {
    console.log('stt 진입');
    const res = await privateApi.post('/ai/stt', data, { headers: { 'Content-Type': 'multipart/form-data' } });
    console.log('stt 성공', res);
    return res.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};

// 문제를 해당 과제에 할당
export const postHomeworkMakeQuestion = async (data: any) => {
  try {
    const res = await privateApi.post('/homework/make/question', data, { headers: { 'Content-Type': 'multipart/form-data' } });
    return;
  } catch (err) {
    console.error(err);
    return false;
  }
};
