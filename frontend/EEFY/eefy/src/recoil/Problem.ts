import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';


const localStorage = typeof window !== 'undefined' ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'homeworkPage',
  storage: localStorage,
});

export const homeworkPage = atom({
  key: 'homeworkPage',
  default: 'problem',
  effects_UNSTABLE: [persistAtom],
});
