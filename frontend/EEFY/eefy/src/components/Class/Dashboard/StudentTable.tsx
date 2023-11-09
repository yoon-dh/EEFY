'use client';

import Image from 'next/image';
import StudentTableItem from './StudentTableItem';
import { useRecoilState } from 'recoil';
import { isSearchState } from '@/recoil/TeacherClass';

function StudentTable() {
  const [searchState, setSearchState] = useRecoilState(isSearchState);

  // 학생 프로필, 이름,  과제, 질의응답
  // 상세 : 이메일, 과제, 시험, 최근 접속 이력
  const dummyData = [
    {
      profile: '/logo.png',
      name: '윤동훈',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
    {
      profile: '/logo.png',
      name: 'Hart Hagerty',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
    {
      profile: '/logo.png',
      name: 'Hart Hagerty',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
    {
      profile: '/logo.png',
      name: 'Hart Hagerty',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
    {
      profile: '/logo.png',
      name: 'Hart Hagerty',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
    {
      profile: '/logo.png',
      name: 'Hart Hagerty',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
    {
      profile: '/logo.png',
      name: 'Hart Hagerty',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
    {
      profile: '/logo.png',
      name: 'Hart Hagerty',
      email: 'acttoze1@gmail.com',
      phone: '010-7748-8173',
    },
  ];
  // <img style={{ margin: 'auto', filter: 'drop-shadow(3px 3px 3px #808080)' }} src={`/logo.png`} />;
  const ImgUrl = '/logo.png';
  return (
    <div className='w-full h-full overflow-auto no-scrollbar'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type='checkbox' className='checkbox' />
              </label>
            </th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => setSearchState(true)} className='bg-stone-100 '>
            <td colSpan={5} className='text-xl rounded-xl' style={{ textAlign: 'center' }}>
              + 초대하기
            </td>
          </tr>
          {dummyData.map((item, idx) => (
            <StudentTableItem key={idx} profile={item.profile} name={item.name} email={item.email} phone={item.phone} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
