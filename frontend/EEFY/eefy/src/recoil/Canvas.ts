import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage = 
      typeof window !== 'undefined' ? window.sessionStorage : undefined

const { persistAtom } = recoilPersist({
  key: 'CanvasData',
  storage: sessionStorage,
});
export const CanvasData = atom({
  key:'CanvasData',
  default:null,
  effects_UNSTABLE: [persistAtom],
})