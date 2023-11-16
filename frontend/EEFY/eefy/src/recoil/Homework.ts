import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

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
// 유형
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
const localStorage = typeof window !== 'undefined' ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'HomeworkIds, Problems, SolvedProblem, MySolved',
  storage: localStorage,
});
// 과제 요청시 필요한 id들
export const HomeworkIds = atom({
  key: "HomeworkIds",
  default: {},
  effects_UNSTABLE: [persistAtom],
})
// 문제들 저장
export const Problems = atom({
  key: "Problems",
  default: {},
  effects_UNSTABLE: [persistAtom],
})
// 정답 저장
export const SolvedProblem = atom({
  key: "SolvedProblem",
  default: {},
  effects_UNSTABLE: [persistAtom],
})
// 내가 푼 정답 저장
export const MySolved = atom({
  key:'MySolved',
  default:[],
  effects_UNSTABLE:[persistAtom]
})