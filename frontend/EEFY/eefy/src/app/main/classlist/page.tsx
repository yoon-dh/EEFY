'use client';

import MainClassBox from '@/components/Main/MainClass/MainClassBox';
import * as S from '@/components/Main/MainClass/MainClassBox.style';
import { HiPlus } from 'react-icons/hi';
import MessageList from '@/components/Message/MessageList';
import ClassCreateModal from '@/components/Main/MainClass/ClassCreateModal';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userData } from '@/recoil/Auth';
import { CreateModalOpen } from '@/recoil/ClassCreate';
import { classCheck } from '@/api/Class/classlist';
import { useEffect, useState } from 'react';

type Class = {
  id: number;
  title: string;
  studentCnt: number;
};

function ClassList() {
  const userDataObj = useRecoilValue(userData);
  const [isCreateModalOpen, setIsCreateModalOpen] = useRecoilState(CreateModalOpen);

  const [classCreated, setClassCreated] = useState(0);
  const [myClassArr, setMyClassArr] = useState<Class[]>([]);
  const [classCnt, setClassCnt] = useState(null);

  useEffect(() => {
    // TODO: 일단 한페이지만, 나중에 페이지네이션?
    const fetchData = async () => {
      const result = await classCheck(0, 8);
      setMyClassArr(result.studyClassList);
      setClassCnt(result.totalCnt);
    };

    fetchData();
  }, [classCreated]);

  return (
    <div className=' w-full h-full' style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontSize: '28px', flex: '1.5', display: 'flex', alignItems: 'center' }}>
        운영 중인 클래스 <span style={{ color: '#4f4d4d81' }}>({classCnt})</span>
      </div>
      <div style={{ flex: '8.5', display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        {/* 강사면 보이고 아니면 안보이게 */}
        {userDataObj?.role === 'TEACHER' ? (
          <S.ClassBox
            onClick={() => setIsCreateModalOpen(true)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
          >
            <div style={{ fontSize: '40px' }}>
              <HiPlus />
            </div>
            <div className='prim' style={{ fontSize: '20px' }}>
              클래스 개설
            </div>
          </S.ClassBox>
        ) : null}

        {/* 클래스 리스트 */}
        {myClassArr?.map(item => (
          <MainClassBox key={item.id} title={item.title} cnt={item.studentCnt} />
        ))}
      </div>
      {/* 메시지 리스트 */}
      <MessageList />
      {/* 클래스 생성 모달 */}
      <ClassCreateModal setClassCreated={setClassCreated} />
    </div>
  );
}

export default ClassList;
