import { atom } from 'recoil';

export const CreateLecture = atom<boolean>({
  key: 'CreateLecture',
  default: false,
});
