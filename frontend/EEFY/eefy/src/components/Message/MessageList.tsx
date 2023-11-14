'use client';

import Modal from 'react-modal';
import { MessageModalOpen } from '@/recoil/PushNotification';
import { useRecoilState } from 'recoil';
import MessageItem from './MessageItem';
import { useEffect, useState } from 'react';
import { alarmList } from '@/api/Push/test';

import { AlarmList } from '@/recoil/PushNotification';

interface alarmArrData {
  messageId: string;
  classId: number;
  link: string;
  className: string;
  title: string;
  content: string;
  createdAt: Date;
}

function MessageList() {
  const [alarmArr, setAlarmArr] = useState<Array<alarmArrData>>([]);
  const [RecoilAlarmArr, setRecoilAlarmArr] = useRecoilState(AlarmList);

  const modalStyle = {
    overlay: {
      position: 'fixed' as 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.1)',
      zIndex: 10,
    },

    content: {
      display: 'flex',
      flexDirextion: 'column',
      background: 'rgba(255, 255, 255, 0.5)',
      overflow: 'auto',
      zIndex: 10,
      top: '40%',
      left: '70%',
      right: '2%',
      bottom: '10%',
      border: '1px solid rgba(131, 129, 129, 0.2)',
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      borderRadius: '20px',
    },
  };

  const [isMessageModalOpen, setIsMessageModalOpen] = useRecoilState(MessageModalOpen);

  function closeModal() {
    setIsMessageModalOpen(false);
  }

  useEffect(() => {
    const alarmListArr = async () => {
      const res = await alarmList();
      console.log(res?.data);
      setAlarmArr(res?.data);
      // test
      setRecoilAlarmArr(res?.data);
    };
    if (isMessageModalOpen) {
      console.log('모달 열었음');
      alarmListArr();
    }
  }, [isMessageModalOpen]);

  return (
    <Modal style={modalStyle} isOpen={isMessageModalOpen} onRequestClose={() => closeModal()}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
        <div style={{ flex: '1' }}>
          <b>Notice ({alarmArr.length})</b>
        </div>

        {alarmArr.length ? (
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flex: '9', flexDirection: 'column' }}>
            {alarmArr.map(item => {
              return (
                <MessageItem
                  key={item.messageId}
                  messageId={item.messageId}
                  notificationTitle={item.title}
                  classTitle={item.className}
                  createDate={item.createdAt}
                  content={item.content}
                  setAlarmArr={setAlarmArr}
                  setRecoilAlarmArr={setRecoilAlarmArr}
                />
              );
            })}
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '8.5', flexDirection: 'column' }}>
            <div>알림이 없습니다.</div>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default MessageList;
