'use client';

import SignUpPage from './SignUpPage';
import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
import { useEffect, useState } from 'react';
import { FCMtoken } from '@/recoil/PushNotification';
import { useRecoilState } from 'recoil';

export default function Home() {
  // FCM 등록 토큰 저장
  require('dotenv').config();
  const [FCMToken, setFCMToken] = useRecoilState(FCMtoken);
  // onMessage test
  const [onMessageTitle, setOnMessageTitle] = useState<string | undefined>('');
  const [onMessageBody, setOnMessageBody] = useState<string | undefined>('');

  const onMessageFCM = async () => {
    // 브라우저에 알림 권한을 요청합니다.
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') return;

    // 이곳에도 아까 위에서 앱 등록할때 받은 'firebaseConfig' 값을 넣어주세요.
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

    // 이곳 vapidKey 값으로 아까 토큰에서 사용한다고 했던 인증서 키 값을 넣어주세요.
    getToken(messaging, { vapidKey: 'BFlWXe5B1irtrj-sT_GtQHYJJ3a4zv562RUM-s8EK-AvD3zIA_ezFEFBRvT_Oa3U1k9HfN3Vh0DjV-MmMvlx8xg' })
      .then(currentToken => {
        if (currentToken) {
          // 정상적으로 토큰이 발급되면 콘솔에 출력합니다.
          console.log(currentToken);
          setFCMToken(currentToken);
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch(err => {
        console.log('An error occurred while retrieving token. ', err);
      });

    // 메세지가 수신되면 역시 콘솔에 출력합니다.
    onMessage(messaging, payload => {
      console.log('Message received. ', payload);
      console.log(payload.notification?.title);
      setOnMessageTitle(payload.notification?.title);
    });
  };

  useEffect(() => {
    onMessageFCM();
  }, []);

  return (
    <div className='w-full h-full'>
      {onMessageTitle !== '' && <div style={{ fontSize: '50px' }}>{onMessageTitle}</div>}
      <SignUpPage />
    </div>
  );
}
