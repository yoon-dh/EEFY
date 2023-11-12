import { privateApi } from '..';

interface data {
  classId:string;
  title: string;
  content: string;
}
interface updata {
  id:Number;
  title: string;
  content: string;
}

// 글 리스트 조회
export const getLectureList = async (classId: Number) => {
  try {
    console.log('학습자료 리스트 진입', classId)
    const res = await privateApi.get(`lecture/list/${classId}`);
    console.log('학습자료 리스트 성공', res)
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 글 작성
export const postLectureCreate = async (data: any) => {
  try {
    console.log('학습자료 작성 진입', data)
    const res = await privateApi.post('/lecture/tutor', data,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('학습자료 작성 성공', res)
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 글 상세보기
export const getLectureDetail = async (id: Number) => {
  try {
    console.log('학습자료 글 상세 진입', id)
    const res = await privateApi.get(`/lecture/${id}`);
    console.log('학습자료 글 상세 성공', res)
    return res;
  } catch (err) {
    console.log(err);
  }
};