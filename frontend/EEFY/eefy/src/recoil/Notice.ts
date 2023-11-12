import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

type Notice = {
  id: string;
  title: string;
  createdAt: Date;
  imgUrl: string;
  nickname: string;
  name: string;
  content: string;
};

const sessionStorage = 
      typeof window !== 'undefined' ? window.sessionStorage : undefined

const { persistAtom } = recoilPersist({
  key: 'Name',
  storage: sessionStorage,
});
export const Name = atom<string>({
  key:'Name',
  default:'notice',
  effects_UNSTABLE: [persistAtom],
})

export const NoticeList = atom<Notice[]>({
  key: 'NoticeList',
  default: [],
});

export const DetailData = atom<any | null>({
  key: 'DetailData',
  default: null,
});

export const NoticePage = atom<string>({
  key: 'NoticePage',
  default: 'detail',
});
