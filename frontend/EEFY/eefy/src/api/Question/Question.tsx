import { privateApi } from '..';

interface data {
  classId:String;
  title: string;
  content: string;
}
interface updata {
  id:string;
  title: string;
  content: string;
}
interface Create {
  classId:Number;
  title: string;
  content: string;
}

// 글 리스트 조회
export const getQuestionList = async (classId: Number) => {
  console.log('질의응답 리스트 진입', classId)
  try {
    const res = await privateApi.get(`question/${classId}`);
    console.log('질의응답 리스트 성공', res)
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 글 작성
export const postQuestionCreate = async (data: Create) => {
  try {
    console.log('질의응답 작성 진입', data)
    const res = await privateApi.post('/question/student', data);
    console.log('질의응답 작성 성공', res)
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 글 수정
export const putQuestionUpdata = async (data: updata) => {
  try {
    console.log('질의응답 수정 진입', data)
    const res = await privateApi.put('/question/student', data);
    console.log('질의응답 수정 성공', res)
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 글 삭제
export const deleteQuestionDelete = async (id: Number) => {
  try {
    console.log('질의응답 글 삭제 진입', id)
    const res = await privateApi.delete(`/question/${id}`);
    console.log('질의응답 글 삭제 성공', res)
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 글 상세보기
export const getQuestionDetail = async (id: Number) => {
  try {
    console.log('질의응답 글 상세 진입', id)
    const res = await privateApi.get(`/question/detail/${id}`);
    console.log('질의응답 글 상세 성공', res)
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 답변 리스트
export const getCommemtList = async (id: Number) => {
  try {
    console.log('질의응답 댓글 상세 진입', id)
    const res = await privateApi.get(`/question/comment/detail/${id}`);
    console.log('질의응답 댓글 상세 성공', res)
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 답변 작성
export const getCommentCreate = async (data:any) => {
  try {
    console.log('질의응답 댓글 작성 진입', data)
    const res = await privateApi.post(`/question/comment`,data);
    console.log('질의응답 댓글 작성 성공', res)
    return res;
  } catch (err) {
    console.log(err);
  }
};