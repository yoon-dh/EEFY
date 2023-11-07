'use client';
import AudioPlayer from './AudioPlayer';
import Rating from './Rating';
import SemiCircleGauge from './SemiCircleGuage';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { StudentQuestionInfo, IsSolved } from '@/recoil/StudyDetails/SpeakDetails';

function SolvedQuestion() {
  const studentQuestionData = useRecoilValue(StudentQuestionInfo);
  const setIsSolved = useSetRecoilState(IsSolved);

  const newRecording = () => {
    console.log('dd');
    setIsSolved(false);
  };

  return (
    <div className='w-full h-full relative'>
      <div className='absolute overflow-auto no-scrollbar text-xl' style={{ top: '10%', bottom: '35%', left: '2%', right: '2%' }}>
        {studentQuestionData.data?.script}
      </div>

      <div className=' absolute flex items-center gap-8' style={{ bottom: '-10px', left: '2%' }}>
        <div className='flex items-end gap-5'>
          <div className='text-accent text-base font-bold'>발음분석평가</div>
          <Rating score={Math.round((3.5 / 5) * 100)} />
        </div>
        <div className='flex items-center'>
          <div className='text-accent text-base font-bold'>단어유사도</div>
          <SemiCircleGauge gauge={80} />
        </div>
      </div>

      <div className='absolute h-fit flex items-end gap-5' style={{ bottom: '5%', right: '2%' }}>
        <div className='text-accent text-sm font-bold cursor-pointer hover:scale-110' onClick={newRecording}>
          +New Recording
        </div>
        <AudioPlayer url={studentQuestionData.data && studentQuestionData.data?.url} />
      </div>
    </div>
  );
}

export default SolvedQuestion;
