import { atom } from 'recoil';

interface OcrDataType {
  pdfFile: string | null;
  imgUrl: string;
  isSuccess: boolean;
}

// ocr 기능을 위한 데이터
export const OcrData = atom<OcrDataType>({
  key: 'OcrData',
  default: {
    pdfFile:null,
    imgUrl:"",
    isSuccess:false
  },
});