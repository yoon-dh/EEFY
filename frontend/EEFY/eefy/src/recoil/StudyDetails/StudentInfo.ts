import { atom } from 'recoil';

interface studentInfoType {
  id: number;
  name: string;
  profileImg: string;
}

// 더미데이터
export const studentInfo = atom<studentInfoType>({
  key: 'studentInfo',
  default: {
    id: 1,
    name: '까를로스',
    profileImg: '',
  },
});

// 강사가 사용 - 학생이 푼 문제 볼 때, 학생의 정보를 저장

// export const studentInfo = atom<studentInfoType>({
//   key: 'studentInfo',
//   default: {
//     id: 0,
//     name: '',
//     profileImg: '',
//   },
// });
