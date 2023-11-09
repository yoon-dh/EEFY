'use client';

import SignUpPage from './SignUpPage';
import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
import { useEffect, useState } from 'react';
import { FCMtoken } from '@/recoil/PushNotification';
import { useRecoilState } from 'recoil';
import { tokentest } from '@/api/Class/classlist';

export default function Home() {
  // FCM 등록 토큰 저장
  require('dotenv').config();
  const [FCMToken, setFCMToken] = useRecoilState(FCMtoken);
  // onMessage test
  const [onMessageTitle, setOnMessageTitle] = useState<string | undefined>('');
  const [onMessageBody, setOnMessageBody] = useState<string | undefined>('');

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
          setFCMToken(currentToken);
          tokentest(currentToken);
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
      setOnMessageTitle(payload.notification?.title);
    });
  };
  console.log('hi');
  useEffect(() => {
    console.log('======================');
    onMessageFCM();
  }, []);

  return (
    <div className='w-full h-full'>
      {onMessageTitle !== '' && <div style={{ fontSize: '50px' }}>{onMessageTitle}</div>}
      <SignUpPage />
    </div>
  );
}
