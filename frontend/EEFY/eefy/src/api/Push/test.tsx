'use client';
import { privateApi } from '..';

interface pushdata {
    classId: number;
    title: string;
    content: string;
}

// 클래스 생성

export const pushTest = async (data: pushdata) => {
    try {
        const res = await privateApi.post('/alarm', data);
        return res;
    } catch (err) {
        console.log(err);
    }
};
