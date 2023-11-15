'use client';
import { useState, useEffect } from 'react';
import { Theme } from '@/recoil/Theme';
import { useRecoilState, useRecoilValue } from 'recoil';

import { TbArrowBackUp } from 'react-icons/tb';
import { IoNotificationsOutline } from 'react-icons/io5';
import Link from 'next/link';

import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
import './Footer.css';
import { MessageModalOpen, AlarmList } from '@/recoil/PushNotification';
import { deleteLogout } from '@/api/Auth/login';
import { useRouter } from 'next/navigation';
import { alarmList } from '@/api/Push/test';
import { TbLogout } from 'react-icons/tb';

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

  const [onMessageTitle, setOnMessageTitle] = useState<string | undefined>('');
  const [startShake, setStartShake] = useState<boolean>(false);
  const [isNewMessage, setIsNewMessage] = useState<boolean>(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useRecoilState(MessageModalOpen);

  //   test
  const RecoilAlarmList = useRecoilValue(AlarmList);
  console.log(RecoilAlarmList);
  console.log(RecoilAlarmList.length);

  useEffect(() => {
    console.log('딸랑딸랑 진입 직전');
    console.log(onMessageTitle);
    if (onMessageTitle !== '') {
      console.log('딸랑딸랑 진입 ');
      setStartShake(true);
      console.log('딸랑딸랑!');

      const timer = setTimeout(() => {
        setStartShake(false);
        setOnMessageTitle('');
        setIsNewMessage(true);
      }, 850);

      return () => clearTimeout(timer);
    }
  }, [onMessageTitle]);

  useEffect(() => {
    const alarmListArr = async () => {
      const res = await alarmList();
      setIsNewMessage(res?.data.length ? true : false);
    };
    alarmListArr();
  }, []);

  // push test

  const onMessageFCM = async () => {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') return;

    const firebaseApp = initializeApp({
      apiKey: 'AIzaSyC7pFu4H7svcrh0RJ_UvKxqrUGZEjJLGXY',
      authDomain: 'eefy-f2294.firebaseapp.com',
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
      console.log(payload.data?.title);
      setOnMessageTitle(payload.data?.title);
      // console.log(payload.notification?.title);
      // setOnMessageTitle(payload.notification?.title);
    });
  };

  useEffect(() => {
    onMessageFCM();
  }, []);

  const handleLogout = async () => {
    const res = await deleteLogout();
    if (res?.status === 200) {
      router.push('/login');
    }
  };

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex justify-between items-center ' style={{ width: '94%' }}>
        {/* 왼쪽 */}
        <div className='flex items-center gap-2' onClick={handleLogout}>
          <TbLogout className='text-3xl text-current' />

          <p className='text-xl'>Log-out</p>
        </div>

        {/* 오른쪽 */}
        <div className='flex items-center gap-7'>
          <Link href={'/main/classlist'} className='tooltip tooltip-top tooltip-base-300' data-tip='홈으로 돌아가기'>
            <TbArrowBackUp className='text-3xl' />
          </Link>

          {/* 테마 변경 */}
          <label className='swap swap-rotate'>
            {/* this hidden checkbox controls the state */}
            <input type='checkbox' checked={darkModeIsAcitive} onChange={e => checkHandler()} />

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

          <div className={`indicator  ${startShake ? 'shake' : ''}`} onClick={() => setIsMessageModalOpen(true)}>
            {isNewMessage || RecoilAlarmList.length ? (
              // {isNewMessage ? (
              <span
                className='indicator-item badge badge-secondary w-1'
                style={{ paddingLeft: '5px', paddingRight: '5px', left: '18px', height: '11.6px', bottom: '1px' }}
                onClick={() => {
                  setIsNewMessage(false);
                }}
              ></span>
            ) : null}

            <IoNotificationsOutline className='text-3xl' style={{ fontWeight: '400' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
