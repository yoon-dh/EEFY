'use client';
import { privateApi } from '..';

interface Createdata {
  title: string;
  content: string;
  startDate: Date;
}

// 클래스 생성

export const createClass = async (data: Createdata) => {
  try {
    const res = await privateApi.post('/study-class/tutor', data);
    return res;
  } catch (err) {
    console.log(err);
  }
};
