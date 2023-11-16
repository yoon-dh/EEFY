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

// 클래스에 할당된 아이디를 기준으로 문제들 불러오기
export const getHomeworkGetProblem = async (classHomeworkId: number) => {
  try {
    console.log('문제 불러오기 진입');
    const res = await privateApi.get(`/homework/getProblem/${classHomeworkId}`);
    console.log('문제 불러오기 성공', res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// 과제를 제출
export const postHomeworkSolve = async (data: any) => {
  try {
    console.log('과제 제출 진입');
    const res = await privateApi.post('/homework/solve', data, { headers: { 'Content-Type': 'multipart/form-data' } });
    console.log('과제 제출 성공', res.data);

    return res.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};
