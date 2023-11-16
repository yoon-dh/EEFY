import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// 스터디 목록 현재 페이지
export const StudyListCurrentPage = atom<number>({
  key: 'StudyListCurrentPage',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

// 스터디 목록 - Speaking 현재 페이지
export const SpeakingStudyListSavePage = atom<number>({
  key: 'SpeakingStudyListSavePage',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

// 스터디 목록 - Reading 현재 페이지
export const ReadingStudyListSavePage = atom<number>({
  key: 'ReadingStudyListSavePage',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

// 스터디 목록 - Listening 현재 페이지
export const ListeningStudyListSavePage = atom<number>({
  key: 'ListeningStudyListSavePage',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});
