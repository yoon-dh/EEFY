'use client';
import React from 'react';
import Link from 'next/link';

import { useRecoilValue } from 'recoil';
import { userData } from '@/recoil/Auth';

import { IoHome } from 'react-icons/io5';
import { FaBookBookmark } from 'react-icons/fa6';

import * as S from '../../../styles/MainStyle.style';

export default function SideNav() {
  const userDataObj = useRecoilValue(userData);
  const role = userDataObj?.role.toLowerCase();
  return (
    <div className='w-full h-full'>
      <div className='h-full' style={{ display: 'flex', justifyContent: 'center' }}>
        <S.MainContainer>
          <ul
            className='menu  rounded-box w-full h-full'
            style={{
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
        </S.MainContainer>
      </div>
    </div>
  );
}
