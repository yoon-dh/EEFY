'use client';

import Image from 'next/image';
import StudentTableItem from './StudentTableItem';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isSearchState } from '@/recoil/TeacherClass';
import { useEffect, useState } from 'react';
import { EnterClassNumber } from '@/recoil/ClassCreate';
import { classInsideStudent } from '@/api/Class/classInside';
import { IoMdArrowBack } from 'react-icons/io';

// test
import { pushTest } from '@/api/Push/test';

interface Student {
    memberId: number;
    profileImagePath: string;
    name: string;
    email: string;
    phoneNumber: string;
}

function StudentTable() {
    const [searchState, setSearchState] = useRecoilState(isSearchState);
    const CLASS_ID = useRecoilValue(EnterClassNumber);
    const [classInsideStudentArr, setClassInsideStudentArr] = useState<Array<Student>>([]);

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
    ];

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
        <div className='w-full h-full overflow-auto no-scrollbar' style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='flex justify-between items-center' style={{ padding: '8px 12px', flex: '1' }}>
                <div className='text-4xl' style={{ opacity: '0' }}>
                    <IoMdArrowBack onClick={() => setSearchState(false)} />
                </div>
                <div className='text-2xl'>수강생 목록</div>
                <div className='text-primary text-2xl' style={{ opacity: '0' }}>
                    완료(0)
                </div>
            </div>
            <table className='table' style={{ flex: '9', display: 'block', height: '100%' }}>
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
                {classInsideStudentArr?.length ? (
                    <tbody>
                        <tr onClick={() => setSearchState(true)} className='bg-stone-100 '>
                            <td colSpan={5} className='text-xl rounded-xl' style={{ textAlign: 'center' }}>
                                + 초대하기
                            </td>
                        </tr>
                        {classInsideStudentArr?.map(item => (
                            <StudentTableItem
                                key={item.memberId}
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
    );
}

export default StudentTable;
