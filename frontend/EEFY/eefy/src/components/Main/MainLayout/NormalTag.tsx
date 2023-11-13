'use client';

import React, { Children } from 'react';
import { useRecoilValue } from 'recoil';
import { userData } from '@/recoil/Auth';

export default function NormalTag() {
  const userDataObj = useRecoilValue(userData);
  const userName = userDataObj?.role === 'TEACHER' ? userDataObj?.nickname : userDataObj?.name;

  return (
    <div
      className='w-5/6 shadow-lg rounded-lg py-2 px-3'
      style={{
        background: 'linear-gradient(99deg, #999BD5 53.12%, #4F489B 155.43%)',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        border: '1px solid rgba(131, 129, 129, 0.2)',
        width: '97%',
        height: '80%',
      }}
    >
      <div className='flex justify-between items-center w-full h-full'>
        <div className='ml-5 flex flex-col'>
          <div>
            <p className='text-3xl font-bold text-white'>{userName}님, 반갑습니다!</p>
          </div>
          <div>
            <p className='text-lg' style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
              Always stay updated in your student portal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
