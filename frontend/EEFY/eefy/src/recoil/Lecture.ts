import { atom } from 'recoil';

export const LecturePage = atom<string>({
  key: 'LecturePage',
  default: 'detail',
});

export const LectureId = atom<Number>({
  key:'LectureId',
  default:-1
})