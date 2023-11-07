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
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    });

    const messaging = getMessaging(firebaseApp);

    // 이곳 vapidKey 값으로 아까 토큰에서 사용한다고 했던 인증서 키 값을 넣어주세요.
    getToken(messaging, { vapidKey: process.env.VAPID_KEY })
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
