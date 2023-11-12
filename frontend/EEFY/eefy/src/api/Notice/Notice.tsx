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
  console.log('공지사항 리스트 진입', classId)
  try {
    const res = await privateApi.get('/study-class/notice', {
      params:classId
    });
    console.log('공지사항 리스트 성공', res)
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 글 작성
export const postNoticeCreate = async (data: data) => {
  console.log('공지사항 작성 진입', data)
  try {
    const res = await privateApi.post('/study-class/tutor/notice', data);
    console.log('공지사항 작성 성공', res)
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 글 수정
export const putNoticeUpdata = async (data: updata) => {
  try {
    console.log('공지사항 수정 진입', data)
    const res = await privateApi.put('/study-class/tutor/notice', data);
    console.log('공지사항 수정 성공', res)
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 글 삭제
export const deleteNoticeDelete = async (id: Number) => {
  try {
    console.log('공지사항 글 삭제 진입', id)
    const res = await privateApi.delete(`/study-class/tutor/notice/${id}`);
    console.log('공지사항 글 삭제 성공', res)
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 글 상세보기
export const getNoticeDetail = async (id: string) => {
  try {
    console.log('공지사항 글 상세 진입', id)
    const res = await privateApi.get(`/study-class/notice/${id}`);
    console.log('공지사항 글 상세 성공', res)
    return res;
  } catch (err) {
    console.log(err);
  }
};