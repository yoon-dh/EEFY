'use client';
import { privateApi } from '..';

interface pushdata {
  classId: number;
  link: string;
  className: string;
  title: string;
  content: string;
}

export const pushTest = async (data: pushdata) => {
  try {
    const res = await privateApi.post('/alarm', data);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 단일 타겟 push
interface pushTargetData {
  targetMemberId: number;
  classId: number;
  link: string;
  className: string;
  title: string;
  content: string;
}

export const targetPush = async (data: pushTargetData) => {
  try {
    const res = await privateApi.post('/alarm/personal', data);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// message list

export const alarmList = async () => {
  try {
    const res = privateApi.get('/alarm');
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 메시지 읽음 처리

export const readAlarm = async (Id: string) => {
  const params = {
    messageId: Id,
  };
  try {
    const res = privateApi.delete('/alarm', { params });
    return res;
  } catch (err) {
    console.log(err);
  }
};
