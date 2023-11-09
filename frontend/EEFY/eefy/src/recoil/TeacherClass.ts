import { atom } from 'recoil';

export const isSearchState = atom<boolean>({
  key: 'isSearchState',
  default: false,
});

export const inviteArray = atom({
  key: 'inviteArray',
  default: [] as { memberId: number; profile: string; name: string }[],
});

export const inviteMemberIdArray = atom({
  key: 'inviteMemberIdArray',
  default: [] as number[],
});
