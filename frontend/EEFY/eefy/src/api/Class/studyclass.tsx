'use client';
import { privateApi } from '..';

// 대쉬보드 공지사항 조회
export const getStudyClassNotice = async (Id: number) => {
  try {
    const params = {
      classId: Id,
    };
    const res = await privateApi.get('/study-class/notice', { params });
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

// 글 리스트 조회
export const getLectureList = async (classId: Number) => {
  try {
    const res = await privateApi.get(`lecture/list/${classId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// // 글 리스트 조회
// export const getNoticeList = async (classId: any) => {
//   try {
//     const res = await privateApi.get('/study-class/notice', {
//       params:classId
//     });
//     return res;
//   } catch (err) {
//     console.log(err);
//   }
// };
