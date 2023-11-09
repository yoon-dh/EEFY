import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist(
  {
    key: 'CanvasData',
    storage: sessionStorage,
  },
);

export const CanvasData = atom({
  key: 'CanvasData',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const CanvasVarData = atom({
  key: 'CanvasVarData',
  default: {
    mode:false,
    color:'#000000',
    clear:false,
    undo:false,
    redo:false,
    penSize:4,
  },
});

export const PdfPage = atom({
  key: 'PdfPage',
  default: {
    numPages:0,
    pageNumber:1,
    btnType:''
  },
})

