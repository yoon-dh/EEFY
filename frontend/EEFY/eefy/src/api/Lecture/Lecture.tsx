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
    const res = await privateApi.get(`lecture/list/${classId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 글 작성
export const postLectureCreate = async (data: any) => {
  try {
    const res = await privateApi.post('/lecture/tutor', data,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 글 상세보기
export const getLectureDetail = async (id: Number) => {
  try {
    const res = await privateApi.get(`/lecture/${id}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
// 필기 저장하기
export const postLecture = async(data:any)=>{
  try{
    console.log('필기 저장', data)
    const res = await privateApi.post('/lecture',data);
    console.log('필기 저장',res)
    return res
  } catch(err){
    console.log(err)
  }
}
// 필기 불러오기
export const getLecture = async(data:any)=>{
  try{
    console.log('필기 불러오기', data)
    const res = await privateApi.get('/lecture',{
      params:data
    })
    console.log(res)
    return res
  } catch(err){
    console.log(err)
  }
}