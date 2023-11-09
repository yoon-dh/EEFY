import { atom } from 'recoil';

export const PaginationAtom = atom<number>({
  key: 'PaginationAtom',
  default: 1,
});
