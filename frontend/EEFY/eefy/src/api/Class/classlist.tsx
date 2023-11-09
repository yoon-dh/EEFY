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

// 클래스 조회

export const classCheck = async (pageNum: number, sizeNum: number) => {
  try {
    const params = {
      page: pageNum,
      size: sizeNum,
    };

    const res = await privateApi.get('/study-class', { params });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
