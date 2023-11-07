'use client';

import Modal from 'react-modal';
import * as S from './ClassCreateModal.style';
import { useRecoilState } from 'recoil';
import { CreateModalOpen } from '@/recoil/ClassCreate';
import { useState } from 'react';
import { createClass } from '@/api/Class/classlist';

function ClassCreateModal() {
  const modalStyle = {
    overlay: {
      position: 'fixed' as 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      zIndex: 10,
    },

    content: {
      display: 'flex',
      flexDirextion: 'column',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.06)',
      overflow: 'auto',
      zIndex: 10,
      top: '20%',
      left: '30%',
      right: '30%',
      bottom: '20%',
      border: 'border: 1px solid rgba(255,255,255,0.1)',
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      //   boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
      //   padding: '20% 30% 30% 20%',
    },
  };

  const [isCreateModalOpen, setIsCreateModalOpen] = useRecoilState(CreateModalOpen);

  function closeModal() {
    setIsCreateModalOpen(false);
  }

  const [classTitle, setClassTitle] = useState<string>('');
  const [classDesc, setClassDesc] = useState<string>('');

  const handleClassTitleChange = (event: any) => {
    setClassTitle(event.target.value);
  };

  const handleClassDescChange = (event: any) => {
    setClassDesc(event.target.value);
  };

  const classCreate = async () => {
    const data = {
      title: classTitle,
      content: classDesc,
      startDate: new Date(),
    };
    const res = await createClass(data);
    if (res?.status === 200) {
      setClassTitle('');
      setClassDesc('');
      closeModal();
    }
  };

  return (
    <Modal style={modalStyle} isOpen={isCreateModalOpen} onRequestClose={() => closeModal()}>
      <div style={{ display: 'flex', width: '80%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '70%' }}>
          <div style={{ flex: '4' }}>
            <div style={{ textTransform: 'uppercase' }}>Class Name</div>
            <S.CreateInput type='text' value={classTitle} onChange={handleClassTitleChange} />
          </div>
          <div style={{ flex: '4' }}>
            <div style={{ textTransform: 'uppercase' }}>Class Description</div>
            <S.CreateInput type='text' value={classDesc} onChange={handleClassDescChange} />
          </div>
          <div style={{ flex: '2' }}>
            {classTitle && classDesc ? <S.CreateBtn onClick={classCreate}>Create</S.CreateBtn> : <S.CreateBtn disabled>fill input</S.CreateBtn>}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ClassCreateModal;
