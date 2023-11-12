import { atom } from 'recoil';

export const LecturePage = atom<string>({
  key: 'LecturePage',
  default: 'detail',
});
