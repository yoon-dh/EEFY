import { atom } from 'recoil';

const dummyData = [];

for (let i = 1; i <= 5; i++) {
  dummyData.push({
    id:`${i}`,
    useName:'까를로스',
    title: `TOEIC 필수 Grammer - part${i}`,
    content:`토익 800완성`,
    number:'20문제'
  });
}

export const ReadListState = atom({
  key: 'ReadListState',
  default: [...dummyData]
})