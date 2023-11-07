import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const ForgetPasswordBox = atom<boolean | null>({
  key: 'ForgetPasswordBox',
  default: false,
});

const localStorage = 
      typeof window !== 'undefined' ? window.localStorage : undefined

const { persistAtom } = recoilPersist({
  key: 'userData',
  storage: localStorage,
});

export const userData = atom({
  key:'userData',
  default:null,
  effects_UNSTABLE: [persistAtom],
})