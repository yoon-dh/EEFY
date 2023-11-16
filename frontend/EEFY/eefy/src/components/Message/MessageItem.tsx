'use client';

import { readAlarm } from '@/api/Push/test';
import Link from 'next/link';

import { useRecoilValue } from 'recoil';
import { Theme } from '@/recoil/Theme';

interface MessageItemProps {
  messageId: string;
  notificationTitle: string;
  classTitle: string;
  createDate: Date;
  content: string;
  link: string;
  setAlarmArr: Function;
  setRecoilAlarmArr: Function;
  setIsMessageModalOpen: Function;
}

function MessageItem({
  messageId,
  notificationTitle,
  content,
  link,
  classTitle,
  createDate,
  setAlarmArr,
  setRecoilAlarmArr,
  setIsMessageModalOpen,
}: MessageItemProps) {
  function dateFormat(createDate: Date): string {
    const currentTime = new Date();
    const elapsedMilliseconds = currentTime.getTime() - new Date(createDate).getTime();
    const elapsedMinutes = Math.floor(elapsedMilliseconds / 1000 / 60);

    if (elapsedMinutes < 1) {
      return '방금 전';
    } else if (elapsedMinutes < 60) {
      return `${elapsedMinutes}분 전`;
    } else if (elapsedMinutes < 1440) {
      const elapsedHours = Math.floor(elapsedMinutes / 60);
      return `${elapsedHours}시간 전`;
    } else {
      const elapsedDays = Math.floor(elapsedMinutes / 1440);
      return `${elapsedDays}일 전`;
    }
  }

  const deleteAlarm = async (ID: string) => {
    const res = await readAlarm(ID);
    setAlarmArr(res?.data);
    setRecoilAlarmArr(res?.data);
  };

  const theme = useRecoilValue(Theme);

  return (
    <Link
      href={link}
      style={{ display: 'flex', width: '100%', marginBottom: '8px', alignItems: 'center' }}
      onClick={() => {
        deleteAlarm(messageId);
        setIsMessageModalOpen(false);
      }}
    >
      <div style={{ flex: '1' }}>
        <div className='bg-primary' style={{ width: '8px', height: '8px', borderRadius: '50%' }}></div>
      </div>
      <div style={{ color: theme === 'winter' ? 'rgb(57, 78, 106)' : 'rgba(255,255,255,0.9)', display: 'flex', flexDirection: 'column', flex: '7' }}>
        <div>{notificationTitle}</div>
        <div style={{ color: theme === 'winter' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.4)' }}>{classTitle}</div>
      </div>
      <div style={{ color: theme === 'winter' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.4)', flex: '2', display: 'flex', justifyContent: 'flex-end' }}>
        <div>{dateFormat(createDate)}</div>
      </div>
    </Link>

    // <Link href={link}>
    //   <div
    //     style={{ display: 'flex', width: '100%', marginBottom: '8px', alignItems: 'center' }}
    //     onClick={() => {
    //       deleteAlarm(messageId);
    //     }}
    //   >
    //     <div style={{ flex: '1' }}>
    //       <div className='bg-primary' style={{ width: '8px', height: '8px', borderRadius: '50%' }}></div>
    //     </div>
    //     <div style={{ display: 'flex', flexDirection: 'column', flex: '7' }}>
    //       <div>{notificationTitle}</div>
    //       <div style={{ color: 'rgba(0,0,0,0.5)' }}>{classTitle}</div>
    //     </div>
    //     <div style={{ color: 'rgba(0,0,0,0.5)', flex: '2', display: 'flex', justifyContent: 'flex-end' }}>
    //       <div>{dateFormat(createDate)}</div>
    //     </div>
    //   </div>
    // </Link>
  );
}

export default MessageItem;
