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

import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';

import { pushTest } from '@/api/Push/test';

import * as styled from '../../../styles/MainStyle.style';

import { EnterClassNumber } from '@/recoil/ClassCreate';

type Class = {
  id: number;
  title: string;
  studentCnt: number;
  teacherNickname: string;
};

function ClassList() {
  const userDataObj = useRecoilValue(userData);
  const [isCreateModalOpen, setIsCreateModalOpen] = useRecoilState(CreateModalOpen);

  const [classCreated, setClassCreated] = useState(0);
  const [myClassArr, setMyClassArr] = useState<Class[]>([]);
  const [classCnt, setClassCnt] = useState(null);

  const CLASS_ID = useRecoilValue(EnterClassNumber);

  const onMessageFCM = async () => {
    const permission = await Notification.requestPermission();
    console.log(permission);
    if (permission !== 'granted') return;

    const firebaseApp = initializeApp({
      apiKey: 'AIzaSyC7pFu4H7svcrh0RJ_UvKxqrUGZEjJLGXY',
      authDomain: 'eefy-f2294.firebaseapp.com',
      // databaseURL: 'https://eefy-f2294-default-rtdb.firebaseio.com',
      projectId: 'eefy-f2294',
      storageBucket: 'eefy-f2294.appspot.com',
      messagingSenderId: '433063675765',
      appId: '1:433063675765:web:751ff0f18e47b9892d353c',
      measurementId: 'G-V0R74XV218',
    });

    const messaging = getMessaging(firebaseApp);

    getToken(messaging, { vapidKey: 'BFlWXe5B1irtrj-sT_GtQHYJJ3a4zv562RUM-s8EK-AvD3zIA_ezFEFBRvT_Oa3U1k9HfN3Vh0DjV-MmMvlx8xg' })
      .then(currentToken => {
        if (currentToken) {
          console.log(currentToken);
          // setFCMToken(currentToken);
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch(err => {
        console.log('An error occurred while retrieving token. ', err);
      });

    onMessage(messaging, payload => {
      console.log('Message received. ', payload);
      console.log(payload.notification?.title);
      // setOnMessageTitle(payload.notification?.title);
    });
  };

  useEffect(() => {
    // TODO: 일단 한페이지만, 나중에 페이지네이션?
    const fetchData = async () => {
      const result = await classCheck(0, 8);
      console.log(result);
      setMyClassArr(result.studyClassList);
      setClassCnt(result.totalCnt);
    };
    fetchData();
  }, [classCreated]);

  return (
    <styled.MainContainer className='w-full h-full'>
      <div className=' w-full h-full' style={{ display: 'flex', flexDirection: 'column' }}>
        {userDataObj?.role === 'TEACHER' ? (
          <div
            style={{
              fontSize: '28px',
              flex: '1.5',
              display: 'flex',
              alignItems: 'center',
              backdropFilter: 'blur(10px)',
              paddingLeft: '3%',
              // background: 'rgba(70, 70, 70, 0.2)',
              // background: 'rgba(240, 240, 240, 0.4)',
            }}
          >
            운영 중인 클래스 <span>({classCnt})</span>
          </div>
        ) : (
          <div style={{ fontSize: '28px', flex: '1.5', display: 'flex', alignItems: 'center', backdropFilter: 'blur(10px)', paddingLeft: '3%' }}>
            수강 중인 클래스 <span>({classCnt})</span>
          </div>
        )}

        <div style={{ flex: '8.5', display: 'flex', gap: '30px', flexWrap: 'wrap', padding: '3%' }}>
          {/* 강사면 보이고 아니면 안보이게 */}
          {userDataObj?.role === 'TEACHER' ? (
            <S.CreateClassBox
              onClick={() => setIsCreateModalOpen(true)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
            >
              <div style={{ fontSize: '40px' }}>
                <HiPlus />
              </div>
              <div className='prim' style={{ fontSize: '20px' }}>
                클래스 개설
              </div>
            </S.CreateClassBox>
          ) : null}

          {/* 클래스 리스트 */}
          {myClassArr?.map(item => (
            <MainClassBox key={item.id} classId={item.id} title={item.title} cnt={item.studentCnt} teacherNickname={item.teacherNickname} />
          ))}
        </div>
        {/* 메시지 리스트 */}
        <MessageList />
        {/* 클래스 생성 모달 */}
        <ClassCreateModal setClassCreated={setClassCreated} />
      </div>
    </styled.MainContainer>
  );
}

export default ClassList;
