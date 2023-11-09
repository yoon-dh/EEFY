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
