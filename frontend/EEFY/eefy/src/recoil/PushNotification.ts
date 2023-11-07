import { atom } from 'recoil';

export const FCMtoken = atom<string>({
  key: 'FCMtoken',
  default: '',
});

export const MessageModalOpen = atom<boolean>({
  key: 'MessageModalOpen',
  default: false,
});
