interface MessageItemProps {
  notificationTitle: string;
  classTitle: string;
  // FIXME: createdate 나중에 타입 바꿔주기
  createDate: string;
}

function MessageItem({ notificationTitle, classTitle, createDate }: MessageItemProps) {
  //     const currentTime = new Date();
  //     const elapsedMilliseconds = currentTime - new Date(dateTime);
  //     const elapsedMinutes = Math.floor(elapsedMilliseconds / 1000 / 60);

  //     if (elapsedMinutes < 1) {
  //       return "방금 전";
  //     } else if (elapsedMinutes < 60) {
  //       return `${elapsedMinutes}분 전`;
  //     } else if (elapsedMinutes < 1440) {
  //       const elapsedHours = Math.floor(elapsedMinutes / 60);
  //       return `${elapsedHours}시간 전`;
  //     } else {
  //       const elapsedDays = Math.floor(elapsedMinutes / 1440);
  //       return `${elapsedDays}일 전`;
  //     }
  //   }

  return (
    <div style={{ display: 'flex', width: '100%', marginBottom: '8px', alignItems: 'center' }}>
      <div style={{ flex: '1' }}>
        <div className='bg-primary' style={{ width: '8px', height: '8px', borderRadius: '50%' }}></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flex: '7' }}>
        <div>{notificationTitle}</div>
        <div style={{ color: 'rgba(0,0,0,0.5)' }}>{classTitle}</div>
      </div>
      <div style={{ color: 'rgba(0,0,0,0.5)', flex: '2', display: 'flex', justifyContent: 'flex-end' }}>
        <div>{createDate}</div>
      </div>
    </div>
  );
}

export default MessageItem;
