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
