import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const CreateModalOpen = atom<boolean>({
  key: 'CreateModalOpen',
  default: false,
});

export const EnterClassNumber = atom<any>({
  key: 'EnterClassNumber',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const EnterClassTitle = atom<string>({
  key: 'EnterClassTitle',
  default: '',
});
