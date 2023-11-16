import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

interface CurrentHomeworkInfoType {
  classHomeworkId: number;
  doneDate: null | Date;
  homeworkStudentId: number;
  memberId: number;
  solvedCount: null | number;
  title: string;
  totalCount: number;
}

export const CurrentHomeworkInfo = atom<CurrentHomeworkInfoType | undefined>({
  key: 'CurrentHomeworkInfo',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
