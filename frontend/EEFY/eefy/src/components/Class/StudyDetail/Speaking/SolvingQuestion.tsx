'use client';
import AudioRecord from './AudioRecord';
import Modal from './Modal';

import { useRecoilValue } from 'recoil';
import { IsModalOpen } from '@/recoil/StudyDetails/SpeakDetails';

function SolvingQuestion() {
  const isModalOpen = useRecoilValue(IsModalOpen);

  return (
    <div className='relative w-full h-full'>
      {/* 모달창 여부 */}
      {isModalOpen ? <Modal /> : <AudioRecord />}
    </div>
  );
}

export default SolvingQuestion;
