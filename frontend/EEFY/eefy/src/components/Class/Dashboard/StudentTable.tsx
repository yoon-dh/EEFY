'use client';

import Image from 'next/image';
import StudentTableItem from './StudentTableItem';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isSearchState } from '@/recoil/TeacherClass';
import { useEffect, useState } from 'react';
import { EnterClassNumber } from '@/recoil/ClassCreate';
import { classInsideStudent } from '@/api/Class/classInside';
import { IoMdArrowBack } from 'react-icons/io';

import * as S from '../../../styles/MainStyle.style';

// test
import { pushTest } from '@/api/Push/test';

interface Student {
  memberId: number;
  profileImagePath: string;
  name: string;
  email: string;
  phoneNumber: string;
}

function StudentTable({ CLASS_ID }: any) {
  const [searchState, setSearchState] = useRecoilState(isSearchState);
  // const CLASS_ID = useRecoilValue(EnterClassNumber);
  const [classInsideStudentArr, setClassInsideStudentArr] = useState<Array<Student>>([]);

  useEffect(() => {
    const ClassStudentResult = async () => {
      const res = await classInsideStudent(CLASS_ID);
      console.log(res?.data);
      setClassInsideStudentArr(res?.data);
    };

    ClassStudentResult();
  }, []);

  // <img style={{ margin: 'auto', filter: 'drop-shadow(3px 3px 3px #808080)' }} src={`/logo.png`} />;
  const ImgUrl = '/logo.png';
  return (
    <S.MainContainer className='w-full h-full'>
      <div className='w-full h-full overflow-auto no-scrollbar' style={{ display: 'flex', flexDirection: 'column' }}>
        <div className='flex justify-center items-center' style={{ padding: '8px 12px', flex: '1' }}>
          {/* <div className='text-4xl' style={{ opacity: '0' }}>
          <IoMdArrowBack onClick={() => setSearchState(false)} />
        </div> */}
          <div className='text-2xl'>수강생 목록</div>
          {/* <div className='text-primary text-2xl' style={{ opacity: '0' }}>
          완료(0)
        </div> */}
        </div>
        <table className='table' style={{ flex: '9', display: 'block', height: '100%' }}>
          {/* head */}
          <thead style={{ width: '100%', display: 'block' }}>
            <tr style={{ width: '100%', display: 'flex' }}>
              <th style={{ flex: '0.5' }}>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <th style={{ flex: '3' }}>Name</th>
              <th style={{ flex: '2.5' }}>E-mail</th>
              <th style={{ flex: '2.5' }}>Phone</th>
              <th style={{ flex: '1.5' }}></th>
            </tr>
          </thead>
          {classInsideStudentArr?.length ? (
            <tbody style={{ display: 'block', width: '100%' }}>
              <tr style={{ width: '100%', display: 'flex', justifyContent: 'center' }} onClick={() => setSearchState(true)} className='bg-base-200 rounded-lg'>
                <td colSpan={5} className='text-xl rounded-xl' style={{ textAlign: 'center' }}>
                  + 초대하기
                </td>
              </tr>
              {classInsideStudentArr?.map(item => (
                <StudentTableItem
                  key={item.memberId}
                  memberId={item.memberId}
                  profile={item.profileImagePath}
                  name={item.name}
                  email={item.email}
                  phone={item.phoneNumber}
                />
              ))}
            </tbody>
          ) : (
            <tbody style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className='mb-2'>수강생이 없습니다</div>
                <div className='text-info' onClick={() => setSearchState(true)}>
                  초대하기
                </div>
              </div>
            </tbody>
          )}
        </table>
      </div>
    </S.MainContainer>
  );
}

export default StudentTable;
