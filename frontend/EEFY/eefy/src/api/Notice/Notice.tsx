import { privateApi } from '..';

interface data {
  classId:Number;
  title: string;
  content: string;
}
interface updata {
  id:string;
  title: string;
  content: string;
}

// 글 리스트 조회
export const getNoticeList = async (classId: any) => {
  try {
    const res = await privateApi.get('/study-class/notice', {
      params:classId
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 글 작성
export const postNoticeCreate = async (data: data) => {
  try {
    const res = await privateApi.post('/study-class/tutor/notice', data);
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 글 수정
export const putNoticeUpdata = async (data: updata) => {
  try {
    const res = await privateApi.put('/study-class/tutor/notice', data);
    return res;
  } catch (err) {
  }
};
// 글 삭제
export const deleteNoticeDelete = async (id: Number) => {
  try {
    const res = await privateApi.delete(`/study-class/tutor/notice/${id}`);
    return res;
  } catch (err) {
  }
};
// 글 상세보기
export const getNoticeDetail = async (id: string) => {
  try {
    const res = await privateApi.get(`/study-class/notice/${id}`);
    return res;
  } catch (err) {
  }
};