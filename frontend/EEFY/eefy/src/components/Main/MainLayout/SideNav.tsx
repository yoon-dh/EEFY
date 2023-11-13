'use client';
import React from 'react';
import Link from 'next/link';

import { useRecoilValue } from 'recoil';
import { userData } from '@/recoil/Auth';

import { IoHome } from 'react-icons/io5';
import { FaBookBookmark } from 'react-icons/fa6';

export default function SideNav() {
  const userDataObj = useRecoilValue(userData);
  const role = userDataObj?.role.toLowerCase();
  return (
    <div className='w-full h-full'>
      <div className='h-full' style={{ display: 'flex', justifyContent: 'center' }}>
        <ul
          className='menu bg-base-200 rounded-box w-3/6'
          style={{
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            border: '1px solid rgba(131, 129, 129, 0.2)',
            // background: 'rgba(255, 255, 255, 0.5)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <br />
          <br />

          {/* 메인 홈(클래스 생성 부분) */}
          <li className='w-full' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link href={'/main/classlist'} className='tooltip tooltip-right tooltip-base-300' data-tip='홈'>
              <IoHome className='text-3xl' />
            </Link>
          </li>

          <br />
          <br />

          {/* 서재 */}
          <li className='w-full' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link href={`/main/library/${role}`} className='tooltip tooltip-right tooltip-base-300' data-tip='서재'>
              <FaBookBookmark className='text-2xl' />
            </Link>
          </li>

          <br />
        </ul>
      </div>
    </div>
  );
}
