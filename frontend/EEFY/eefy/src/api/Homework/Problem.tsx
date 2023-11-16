import { privateApi, getLocalStorage } from '..';

interface HomeworkData {
  title: string;
  content: string;
  type: string;
}
interface memberId {
  memberId: Number;
}

// ocr
export const postOcr = async (file: any) => {
  try {
    console.log('Ocr 진입', file);
    const response = await privateApi.post('/ai/ocr/document', file, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Ocr 성공', response);
    console.log('Ocr 성공', response.data);
    return response;
  } catch (error) {
    console.log('Ocr실패', error);
  }
};
// 문제집 생성
export const postHomeworkMake = async (data: HomeworkData,memberId : memberId) => {
  try {
    console.log('문제집 생성 진입', data, typeof(memberId));
    const response = await privateApi.post('/homework/make', data,{
      headers:{
        "Member-Id":Number(memberId)
      }
    });
    console.log('문제집 생성 진입 성공', response);
    return response;
  } catch (error) {
    console.log('문제집 생성 진입 실패', error);
  }
};
// 문제 생성
export const postHomeworkMakeQuestion = async (data: any, memberId: memberId) => {
  try {
    console.log('문제 생성 진입', data);
    const response = await privateApi.post('/homework/make/question', data, {
      headers:{
        // "Member-Id":Number(memberId),
        'Content-Type': 'multipart/form-data',
      }
    });
    console.log('문제 생성 진입 성공', response);
    return response;
  } catch (error) {
    console.log('문제 생성 진입 실패', error);
  }
};
// 과제 만들기 완료
export const putHomeworkMake = async (homeworkId:number) => {
  try {
    console.log('과제 만들기 진입', homeworkId);
    const response = await privateApi.put('/homework/make/question', homeworkId);
    console.log('과제 만들기 진입 성공', response);
    return response;
  } catch (error) {
    console.log('과제 만들기 진입 실패', error);
  }
};
// 클래스에 과제 불러오기
export const getHomework = async (data:any) => {
  try {
    console.log('과제 불러오기 생성 진입', data);
    const response = await privateApi.get('/homework/view',{
      params:data
    });
    console.log('과제 불러오기 진입 성공', response);
    return response;
  } catch (error) {
    console.log('과제 불러오기 진입 실패', error);
  }
};
// 문제 불러오기
export const getProblem = async (classHomeworkId:number) => {
  try {
    console.log('문제 불러오기 생성 진입');
    const response = await privateApi.get(`/homework/getProblem/${classHomeworkId}`);
    console.log('문제 불러오기 진입 성공', response);
    return response;
  } catch (error) {
    console.log('문제 불러오기 진입 실패', error);
  }
};
// 문제 제출
export const postSolveProblem = async(solveProblemRequest:any)=>{
  try{
    console.log('답 제출 진입', solveProblemRequest)
    const res = await privateApi.post('/homework/solve',solveProblemRequest,{
      headers:{
        'Content-Type': 'multipart/form-data',
      }
    });
    console.log(res,'답 제출 완료')
    return res
  } catch(err){
    console.log(err)
  }
}