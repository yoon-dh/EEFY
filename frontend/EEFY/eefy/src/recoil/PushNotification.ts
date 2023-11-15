import { unlink } from 'fs';
import { atom } from 'recoil';

export const FCMtoken = atom<string | null>({
  key: 'FCMtoken',
  default: null,
});

export const MessageModalOpen = atom<boolean>({
  key: 'MessageModalOpen',
  default: false,
});

export const AlarmList = atom({
  key: 'AlarmList',
  default: [],
});
