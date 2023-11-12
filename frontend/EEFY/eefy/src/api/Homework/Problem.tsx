import { privateApi, getLocalStorage } from '..';

interface HomeworkData {
  title: string;
  content: string;
  type: string;
}

interface choiceRequestsData {
  content: string;
  number: string;
}

interface memberId {
  memberId: Number;
}

interface Question {
  homeworkId: Number;
  title: string;
  content: string;
  field: string; // 유형
  answer: string; // 답
  choiceRequests1: Array<choiceRequestsData>;
  voiceFile: string;
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
        "Member-Id":Number(memberId),
        'Content-Type': 'multipart/form-data',
      }
    });
    console.log('문제 생성 진입 성공', response);
    return response;
  } catch (error) {
    console.log('문제 생성 진입 실패', error);
  }
};
