import { atom } from 'recoil';

export interface UserInfoTypes {
  email: string;
  name: string;
}

export const UserInfo = atom<UserInfoTypes>({
  key: 'UserInfo',
  default: {
    email: '',
    name: '',
  },
});

export const UserType = atom<number>({
  key: 'UserType',
  default: 2, // 1이면 선생, 2면 학생 (임시)
});
