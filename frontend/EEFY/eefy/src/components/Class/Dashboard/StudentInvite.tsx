'use client';

import * as S from '../../Main/MainClass/ClassCreateModal.style';
import * as styled from '../../../styles/MainStyle.style';

import StudentSearchItem from './StudentSearchItem';
import { useEffect, useState } from 'react';
import { inviteArray, inviteMemberIdArray } from '@/recoil/TeacherClass';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TbArrowsExchange2 } from 'react-icons/tb';
import Image from 'next/image';
import StudentInviteItem from './StudentInviteItem';
import { IoMdArrowBack } from 'react-icons/io';

import { searchStudents } from '@/api/Invite/Search';
import { isSearchState } from '@/recoil/TeacherClass';
import { EnterClassNumber } from '@/recoil/ClassCreate';

import { InviteStudents } from '@/api/Invite/Invite';
import { SubscribeStudents } from '@/api/Invite/Invite';

interface Student {
  memberId: number;
  profileImagePath: string;
  name: string;
  email: string;
  phone: string;
}

function StudentInvite({ CLASS_ID }: any) {
  //  true = Name, false = E-mail
  const [isName, setIsName] = useState<boolean>(true);
  const [keyWord, setKeyword] = useState<string>('');
  // const CLASS_ID = useRecoilValue(EnterClassNumber);

  const [inviteArr, setInviteArr] = useRecoilState(inviteArray);
  const [inviteMemberIdArr, setInviteMemberIdArr] = useRecoilState(inviteMemberIdArray);
  const [searchState, setSearchState] = useRecoilState(isSearchState);

  const [searchResultArr, setSearchResultArr] = useState<Array<Student>>([]);

  const handleKeywordChange = (event: any) => {
    setKeyword(event.target.value);
  };

  //   학생 검색
  const searchBtnClick = async () => {
    let type = isName ? 'name' : 'email';
    const res = await searchStudents(type, keyWord, CLASS_ID);
    // console.log(res);
    console.log(res.length);
    if (!res.length) return;
    setSearchResultArr(res);
    // console.log(res);
  };

  //   학생 초대 + 구독
  const InviteBtnClick = async () => {
    if (!inviteMemberIdArr.length) return;
    let memberArr = [];
    for (let i = 0; i < inviteMemberIdArr.length; i++) {
      memberArr.push({ memberId: inviteMemberIdArr[i] });
    }

    const InviteStudentData = {
      classId: CLASS_ID,
      memberList: memberArr,
    };

    const SubscribeStudentData = {
      studentIds: inviteMemberIdArr,
    };
    console.log(SubscribeStudentData);

    await InviteStudents(InviteStudentData);
    await SubscribeStudents(CLASS_ID, SubscribeStudentData);
    setSearchState(false);
  };

  useEffect(() => {
    return () => {
      setInviteArr([]);
      setInviteMemberIdArr([]);
      setSearchState(false);
    };
  }, []);

  return (
    <styled.MainContainer className='w-full h-full'>
      <div style={{ display: 'flex', flexDirection: 'column' }} className='w-full h-full overflow-auto no-scrollbar'>
        {/* invite Nav */}
        <div className='flex justify-center items-center' style={{ padding: '8px 12px', flex: '1', position: 'relative' }}>
          <div className='text-4xl' style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translate(-50%, -50%)' }}>
            <IoMdArrowBack onClick={() => setSearchState(false)} />
          </div>
          <div className='text-2xl'>수강생 초대</div>
          <div
            className='text-info text-2xl'
            style={{ position: 'absolute', top: '50%', left: '90%', transform: 'translate(-50%, -50%)', width: '100px' }}
            onClick={InviteBtnClick}
          >
            완료({inviteArr.length})
          </div>
        </div>
        {/* show select user section */}
        <div style={{ flex: inviteMemberIdArr.length ? '1' : '0' }}>
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
        <div style={{ flex: '1', display: 'flex', padding: '8px 12px' }}>
          <label className='swap bg-base-200 rounded-lg' style={{ flex: '2' }}>
            <input type='checkbox' onClick={() => setIsName(!isName)} />
            <div className='swap-on'>E-mail</div>
            <div className='swap-off'>Name</div>
          </label>
          <div style={{ flex: '0.2' }}></div>
          <S.CreateInput type='text' value={keyWord} onChange={handleKeywordChange} style={{ flex: '6.6', height: '100%' }} />
          <div style={{ flex: '0.2' }}></div>
          <S.CreateBtn className='text-base-100 rounded-lg' style={{ flex: '1' }} onClick={searchBtnClick}>
            search
          </S.CreateBtn>
        </div>

        {/* serach result */}
        <div style={{ overflowY: 'auto', flex: inviteMemberIdArr.length ? '7' : '8' }}>
          <table style={{ display: 'block', height: '100%' }} className='table'>
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
            {searchResultArr.length ? (
              <tbody style={{ display: 'block', height: '100%' }}>
                {searchResultArr?.map(item => {
                  return (
                    <StudentSearchItem
                      key={item.memberId}
                      memberId={item.memberId}
                      profile={item.profileImagePath}
                      name={item.name}
                      email={item.email}
                      phone={item.phone}
                    />
                  );
                })}
              </tbody>
            ) : (
              <tbody style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80%' }}>
                <div style={{ width: '100%', height: '15%', textAlign: 'center', lineHeight: 'center' }}>검색 결과가 없습니다.</div>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </styled.MainContainer>
  );
}

export default StudentInvite;
