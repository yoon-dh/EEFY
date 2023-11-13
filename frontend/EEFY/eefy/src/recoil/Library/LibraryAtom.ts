import { atom } from 'recoil';

interface paginationType {
  totalPage: number;
  requestPage: number;
}

export const PaginationAtom = atom<paginationType>({
  key: 'PaginationAtom',
  default: {
    totalPage: 0,
    requestPage: 1,
  },
});

export const AllListPaginationAtom = atom<paginationType>({
  key: 'AllListPaginationAtom',
  default: {
    totalPage: 0,
    requestPage: 1,
  },
});

export const SpeakingListPaginationAtom = atom<paginationType>({
  key: 'SpeakingListPaginationAtom',
  default: {
    totalPage: 0,
    requestPage: 1,
  },
});

export const ReadingListPaginationAtom = atom<paginationType>({
  key: 'ReadingListPaginationAtom',
  default: {
    totalPage: 0,
    requestPage: 1,
  },
});

export const ListeningListPaginationAtom = atom<paginationType>({
  key: 'ListeningListPaginationAtom',
  default: {
    totalPage: 0,
    requestPage: 1,
  },
});
