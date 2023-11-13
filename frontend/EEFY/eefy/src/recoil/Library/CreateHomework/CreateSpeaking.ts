import { atom } from 'recoil';

interface SpeakingFileInfoAtomType {
  file: File | undefined;
  script: string;
}

interface SpeakingAllFilesInfoAtomType {
  file: File | undefined;
  script: string;
}

// STT 시 로딩 여부
export const STTLoadingAtom = atom<boolean>({
  key: 'STTLoadingAtom',
  default: false,
});

// 문제 한문제에 대한 정보
export const SpeakingFileInfoAtom = atom<SpeakingFileInfoAtomType>({
  key: 'SpeakingFileInfoAtom',
  default: {
    file: undefined,
    script: '',
  },
});

// 문제집 종합에 대한 정보
export const SpeakingAllFilesInfoAtom = atom<SpeakingAllFilesInfoAtomType[]>({
  key: 'SpeakingAllFilesInfoAtom',
  default: [],
});
