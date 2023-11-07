import Modal from 'react-modal';
import { MessageModalOpen } from '@/recoil/PushNotification';
import { useRecoilState } from 'recoil';
import MessageItem from './MessageItem';

function MessageList() {
  const dummy = [
    { notificationTitle: '공지사항이 등록되었습니다.', classTitle: '토익 900완성반', createDate: '16분 전' },
    { notificationTitle: '질문에 답변이 등록되었습니다.', classTitle: '토익 900완성반', createDate: '30분 전' },
  ];

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

  return (
    <Modal style={modalStyle} isOpen={isMessageModalOpen} onRequestClose={() => closeModal()}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
        <div style={{ flex: '1.5' }}>
          <b>Notice ({dummy.length})</b>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flex: '8.5', flexDirection: 'column' }}>
          {dummy ? (
            dummy.map((item, idx) => {
              return <MessageItem key={idx} notificationTitle={item.notificationTitle} classTitle={item.classTitle} createDate={item.createDate} />;
            })
          ) : (
            <div>알림이 없습니다.</div>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default MessageList;
