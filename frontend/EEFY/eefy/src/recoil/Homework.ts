import { atom } from 'recoil';

// 문제집 이름과 id
export const Homework = atom({
  key: 'Homework',
  default: {
    Title:'',
    homeworkId:null
  }
})
// 문제들 저장
export const HomeworkProblem = atom<any>({
  key: 'HomeworkProblem',
  default: []
})
export const Category = atom({
  key: 'Category',
  default: ''
})
export const OcrFileCheck = atom({
  key: 'OcrFileCheck',
  default: {
    imgUrl:'',
    pdfFile:'',
    isSuccess:false
  }
})

