'use client';
import { privateApi } from '..';

interface postHomeworkAssignClassDataType {
  classId: number;
  dueDate: Date;
  homeworkId: number;
}

export const postHomeworkAssignClass = async (data: Blob) => {
  try {
    console.log('과제 등록 진입');
    const res = await privateApi.post('/homework/assign/class', data);
    console.log('과제 등록 성공');

    return res.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};
