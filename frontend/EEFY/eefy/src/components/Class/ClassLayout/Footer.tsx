'use client';
import { useState } from 'react';
import Link from 'next/link';

import { Theme } from '@/recoil/Theme';
import { useRecoilState } from 'recoil';

import { IoHomeOutline, IoNotificationsOutline } from 'react-icons/io5';
import { TbLogout } from 'react-icons/tb';
import { deleteLogout } from '@/api/Auth/login';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();
  const [darkModeIsAcitive, setdarkModeIsAcitive] = useState(false);
  const [theme, setTheme] = useRecoilState(Theme);
  const checkHandler = () => {
    const isActiv = !darkModeIsAcitive;
    setdarkModeIsAcitive(isActiv);
    if (!isActiv) {
      setTheme('winter');
    } else {
      setTheme('dark');
    }
  };

  const handleLogout = async () => {
    const res = await deleteLogout();
    console.log(res, '로그아웃 풋터');
    if (res?.status === 200) {
      router.push('/login');
    }
  };

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex justify-between items-center' style={{ width: '95%' }}>
        {/* 왼쪽 Logout 버튼 */}
        <div className='flex items-center gap-2' style={{ border: '1px solid black' }} onClick={handleLogout}>
          <TbLogout className='text-3xl text-current' />

          <p className='text-xl'>Log-out</p>
        </div>

        {/* 오른쪽 Nav */}
        <div className='flex items-center gap-7'>
          <Link href={'/main/classlist'} className='tooltip tooltip-top tooltip-base-300' data-tip='홈으로 돌아가기'>
            <IoHomeOutline className='text-3xl fill-current' />
          </Link>

          {/* 테마 변경 */}
          <label className='swap swap-rotate'>
            {/* this hidden checkbox controls the state */}
            <input
              type='checkbox'
              checked={darkModeIsAcitive}
              onChange={e => checkHandler()}
              className='tooltip tooltip-top tooltip-base-300'
              data-tip='테마 변경'
            />

            {/* sun icon */}
            <svg className='swap-on fill-current w-8 h-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
            </svg>

            {/* moon icon */}
            <svg className='swap-off fill-current w-8 h-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
            </svg>
          </label>

          {/* 알람 */}
          <div className='indicator'>
            <span
              className='indicator-item badge badge-secondary w-1'
              style={{ paddingLeft: '5px', paddingRight: '5px', left: '18px', height: '11.6px', bottom: '1px' }}
            ></span>
            <IoNotificationsOutline className='text-3xl' style={{ fontWeight: '400' }} />
          </div>
        </div>
      </div>

      {/* <label className="swap text-6xl">
        <input type="checkbox" id="allCk"/>
        <div className="swap-on">🥵</div>
        <div className="swap-off">🥶</div>
      </label>
      <label className="swap swap-active text-6xl">
        <div className="swap-on">🥳</div>
        <div className="swap-off">😭</div>
      </label> */}
    </div>
  );
}
