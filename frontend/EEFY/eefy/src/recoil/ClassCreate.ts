import { atom } from 'recoil';

export const CreateModalOpen = atom<boolean>({
  key: 'CreateModalOpen',
  default: false,
});
