import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const CurrentPage = atom<number>({
  key: 'CurrentPage',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const AllListSavePage = atom<number>({
  key: 'AllListSavePage',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});
export const SpeakingListSavePage = atom<number>({
  key: 'SpeakingListSavePage',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});
export const ReadingListSavePage = atom<number>({
  key: 'ReadingListSavePage',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const ListeningListSavePage = atom<number>({
  key: 'ListeningListSavePage',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});
