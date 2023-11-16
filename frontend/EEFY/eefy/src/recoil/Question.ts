import { atom } from 'recoil';

export const QuestionNum = atom({
  key: 'QuestionNum',
  default: {},
});

export const QuestionPage = atom<string>({
  key: 'QuestionPage',
  default: 'detail',
});

export const QuestionWaitStatus = atom<boolean>({
  key: 'QuestionWaitStatus',
  default: false,
});
