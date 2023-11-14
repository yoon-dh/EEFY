import { atom } from 'recoil';

interface HomeworkInfoType {
  title: string;
  description: string;
}

export const CreateHomeworkStepAtom = atom<number>({
  key: 'CreateHomeworkStepAtom',
  default: 0,
});

export const HomeworkCategoryAtom = atom<string>({
  key: 'HomeworkCategory',
  default: 'SPEAKING',
});

export const HomeworkInfoDataAtom = atom<HomeworkInfoType>({
  key: 'HomeworkInfoDataAtom',
  default: {
    title: '',
    description: '',
  },
});

export const HomeworkIdAtom = atom<number | undefined>({
  key: 'HomeworkIdAtom',
  default: undefined,
});
