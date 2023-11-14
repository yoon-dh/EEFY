import React from 'react';

import { MdSpaceDashboard } from 'react-icons/md'; // 대쉬보드
import { AiTwotoneNotification } from 'react-icons/ai'; // 공지사항
import { ImPencil } from 'react-icons/im'; // 과제
import { PiNotepadFill } from 'react-icons/pi'; // 학습자료
import { RiQuestionnaireFill } from 'react-icons/ri'; // 질문사항
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { Name } from '@/recoil/Notice';

import * as S from '../../../styles/MainStyle.style';
import { useParams } from 'next/navigation';

export default function SideNav() {
  const [name, setName] = useRecoilState<string>(Name);
  const classParams = useParams();
  const CLASS_ID = Number(classParams.classId);
  return (
    <div className='w-full h-full' style={{ zIndex: '10' }}>
      <div className='h-full' style={{ display: 'flex', justifyContent: 'center' }}>
        <S.MainContainer>
          <ul
            className='menu rounded-box w-3/6 w-full h-full'
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <br />
            <br />

            {/* 대시보드 */}
            <li className='w-full' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Link href={`/class/${CLASS_ID}/dashboard`} className='tooltip tooltip-right tooltip-base-300' data-tip='대시보드'>
                <MdSpaceDashboard className='text-3xl' />
              </Link>
            </li>

            <br />
            <br />

            {/* 공지사항 */}
            <li className='w-full' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Link href={`/class/${CLASS_ID}/notice`} onClick={() => setName('notice')} className='tooltip tooltip-right tooltip-base-300' data-tip='공지사항'>
                <AiTwotoneNotification className='text-3xl' />
              </Link>
            </li>

            <br />
            <br />

            {/* 과제 * 3 */}
            <li className='w-full' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Link href={`/class/${CLASS_ID}/studylist`} className='tooltip tooltip-right tooltip-base-300' data-tip='과제'>
                <ImPencil className='text-3xl' />
              </Link>
            </li>

            <br />
            <br />

            {/* 강의자료(자료실) */}
            <li className='w-full' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Link
                href={`/class/${CLASS_ID}/lecture`}
                onClick={() => setName('lecture')}
                className='tooltip tooltip-right tooltip-base-300'
                data-tip='학습자료'
              >
                <PiNotepadFill className='text-3xl' />
              </Link>
            </li>

            <br />
            <br />

            {/* Q&A */}
            <li className='w-full' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Link
                href={`/class/${CLASS_ID}/question`}
                onClick={() => setName('question')}
                className='tooltip tooltip-right tooltip-base-300'
                data-tip='질문게시판'
              >
                <RiQuestionnaireFill className='text-3xl' />
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
        </S.MainContainer>
      </div>
    </div>
  );
}
