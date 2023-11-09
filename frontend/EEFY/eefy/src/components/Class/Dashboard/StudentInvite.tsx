'use client';

import * as S from '../../Main/MainClass/ClassCreateModal.style';

import StudentSearchItem from './StudentSearchItem';
import { useState } from 'react';
import { inviteArray } from '@/recoil/TeacherClass';
import { useRecoilState } from 'recoil';
import { TbArrowsExchange2 } from 'react-icons/tb';
import Image from 'next/image';
import StudentInviteItem from './StudentInviteItem';
import { IoMdArrowBack } from 'react-icons/io';

import { searchStudents } from '@/api/Invite/Search';
import { isSearchState } from '@/recoil/TeacherClass';

function StudentInvite() {
  const dummyData = [
    {
      memberId: 1,
      profile: '/logo.png',
      name: '윤동훈1',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
    {
      memberId: 2,
      profile: '/logo.png',
      name: '윤동훈2',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
    {
      memberId: 3,
      profile: '/logo.png',
      name: '윤동훈3',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
    {
      memberId: 4,
      profile: '/logo.png',
      name: '윤동훈4',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
    {
      memberId: 5,
      profile: '/logo.png',
      name: '윤동훈5',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
    {
      memberId: 6,
      profile: '/logo.png',
      name: '윤동훈6',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
    {
      memberId: 7,
      profile: '/logo.png',
      name: '윤동훈7',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
    {
      memberId: 8,
      profile: '/logo.png',
      name: '윤동훈8',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
  ];

  //  true = Name, false = E-mail
  const [isName, setIsName] = useState<boolean>(true);
  const [keyWord, setKeyword] = useState<string>('');
  console.log(keyWord);

  const [inviteArr, setInviteArr] = useRecoilState(inviteArray);
  const [searchState, setSearchState] = useRecoilState(isSearchState);

  const handleKeywordChange = (event: any) => {
    setKeyword(event.target.value);
  };

  //   학생 검색
  const searchBtnClick = async () => {
    console.log('==============================');
    let type = isName ? 'name' : 'email';
    const res = await searchStudents(type, keyWord);
    console.log(res);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} className='w-full h-full overflow-auto no-scrollbar'>
      {/* <div style={{ display: 'flex', flexDirection: 'column' }} className='w-full h-full overflow-auto no-scrollbar'> */}
      {/* invite Nav */}
      <div className='flex justify-between items-center' style={{ padding: '8px 12px' }}>
        <div className='text-4xl'>
          <IoMdArrowBack onClick={() => setSearchState(false)} />
        </div>
        <div className='text-2xl'>수강생 초대</div>
        <div className='text-primary text-2xl'>완료({inviteArr.length})</div>
      </div>
      {/* show select user section */}
      <div style={{ flex: '2' }}>
        {/* select user */}
        {inviteArr.length !== 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', padding: '12px 18px', gap: '15px' }}>
            {inviteArr.map(item => {
              return <StudentInviteItem key={item.memberId} memberId={item.memberId} profile={item.profile} name={item.name} />;
            })}
          </div>
        ) : null}
      </div>
      {/* search bar section */}
      <div style={{ flex: '2', display: 'flex', padding: '8px 12px' }}>
        <label className='swap bg-base-200 rounded-lg' style={{ flex: '2' }}>
          <input type='checkbox' onClick={() => setIsName(!isName)} />
          <div className='swap-on'>E-mail</div>
          <div className='swap-off'>Name</div>
        </label>
        <div style={{ flex: '0.2' }}></div>
        <S.CreateInput type='text' value={keyWord} onChange={handleKeywordChange} style={{ flex: '5.6', height: '100%' }} />
        <div style={{ flex: '0.2' }}></div>
        <S.CreateBtn style={{ flex: '2' }} onClick={searchBtnClick}>
          search
        </S.CreateBtn>
      </div>

      {/* serach result */}
      <div style={{ overflowY: 'auto' }}>
        <table style={{ display: 'block' }} className='table'>
          {/* head */}
          <thead style={{ width: '100%', display: 'block' }}>
            <tr style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
              <th style={{ flex: '0.1' }}>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <th style={{ flex: '1' }}>Name</th>
              <th style={{ flex: '2' }}>E-mail</th>
            </tr>
          </thead>
          <tbody style={{ display: 'block' }}>
            {dummyData.map(item => {
              return (
                <StudentSearchItem key={item.memberId} memberId={item.memberId} profile={item.profile} name={item.name} email={item.email} phone={item.phone} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentInvite;
