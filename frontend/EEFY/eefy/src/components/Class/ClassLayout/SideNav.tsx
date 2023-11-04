import React from 'react';

import { MdSpaceDashboard } from 'react-icons/md'; // 대쉬보드
import { AiTwotoneNotification } from 'react-icons/ai'; // 공지사항
import { ImPencil } from 'react-icons/im'; // 과제
import { PiNotepadFill } from 'react-icons/pi'; // 학습자료
import { RiQuestionnaireFill } from 'react-icons/ri'; // 질문사항
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { Name } from '@/recoil/Notice';
export default function SideNav() {
  const [name, setName] = useRecoilState<string>(Name)
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
          {/* toggle(hamburger) */}
          {/* <br />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <label className='btn swap swap-rotate bg-transparent border-none' style={{ padding: '0px 14px' }}>
              this hidden checkbox controls the state
              <input type='checkbox' />

              hamburger icon
              <svg className='swap-off fill-current bg-transparent' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'>
                <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
              </svg>

              close icon
              <svg className='swap-on fill-current bg-transparent' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'>
                <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
              </svg>
            </label>
          </div> */}

          <br />
          <br />

          {/* 대시보드 */}
          <li className='w-full' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link href={'/class/dashboard'} className='tooltip tooltip-right tooltip-base-300' data-tip='대시보드'>
              <MdSpaceDashboard className='text-3xl' />
              {/* <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg> */}
            </Link>
          </li>
          <br />
          <br />

          {/* 공지사항 */}
          <li className='w-full' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link href={'/class/notice'} onClick={()=>setName('notice')}>
              <AiTwotoneNotification className='text-3xl' />

              {/* <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg> */}
            </Link>
          </li>

          <br />
          <br />

          {/* 과제 * 3 */}
          <li className='w-full' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link href={'/class/studylist'} onClick={()=>setName('studylist')}>
              <ImPencil className='text-3xl' />

              {/* <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg> */}
            </Link>
          </li>

          <br />
          <br />

          {/* 강의자료(자료실) */}
          <li className='w-full' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link href={'/class/lecture'}>
              <PiNotepadFill className='text-3xl' />
              {/* <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg> */}
            </Link>
          </li>

          <br />
          <br />

          {/* Q&A */}
          <li className='w-full' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link href={'/class/question'} onClick={()=>setName('question')}>
              <RiQuestionnaireFill className='text-3xl' />
              {/* <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg> */}
            </Link>
          </li>

          <br />

          {/* 마이페이지 - 학생 OR 학생관리 - 강사  */}
          {/* <li className='w-full' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            </a>
          </li> */}

          <br />
        </ul>
      </div>
    </div>
  );
}
