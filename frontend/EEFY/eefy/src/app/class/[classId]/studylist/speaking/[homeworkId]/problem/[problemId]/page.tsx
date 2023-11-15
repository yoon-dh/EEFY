'use client';
import Speaking from '@/components/Class/StudyDetail/Speaking/Speaking';

import { useParams } from 'next/navigation';

function SpeakingProblem() {
  const paramsObj: any = useParams(); //예시 {classId: '46', homeworkId: '14', problemId: '0'}
  console.log(paramsObj);
  return (
    <div className='w-full h-full flex flex-col'>
      <Speaking />
    </div>
  );
}

export default SpeakingProblem;
