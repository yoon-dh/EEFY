import { atom } from 'recoil';

export const ForgetPasswordBox = atom<boolean | null>({
  key: 'ForgetPasswordBox',
  default: false,
});