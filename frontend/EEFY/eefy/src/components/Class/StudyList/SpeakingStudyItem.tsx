// import Score from './Score';
// import SemiCircleGauge from './SemiCircleGuage';
'use client';

import { CurrentHomeworkInfo } from '@/recoil/StudyList/StudyList';
import * as S from '@/styles/MainStyle.style';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

interface SpeakingStudyItemProps {
  classHomeworkId: number;
  doneDate: null | Date;
  homeworkStudentId: number;
  memberId: number;
  solvedCount: null | number;
  title: string;
  totalCount: number;
}

function SpeakingStudyItem({ libraryData, classId, homeworkType }: { libraryData: any; classId: any; homeworkType: string }) {
  const newProgress = Math.round(((libraryData.solvedCount ? libraryData.solvedCount : 0) / libraryData.totalCount) * 100);
  const router = useRouter();
  const setCurrentHomeworkInfo = useSetRecoilState(CurrentHomeworkInfo);
  const onClickHandler = () => {
    setCurrentHomeworkInfo(libraryData);
    if(homeworkType === 'reading'){
      router.push(`/class/${classId}/studylist/${homeworkType}/${libraryData.classHomeworkId}/problem/1`);
    } else {
      router.push(`/class/${classId}/studylist/${homeworkType}/${libraryData.classHomeworkId}/problem/`);
    }
  };

  return (
    <S.MainContainer className='w-full' style={{ height: '18%', marginBottom: '1%' }} onClick={onClickHandler}>
      <div className='flex justify-between items-center' style={{ paddingTop: '0.7%', paddingBottom: '0.3%', paddingLeft: '3%', paddingRight: '3%' }}>
        <div className='flex flex-col'>
          <p className='text-xl font-bold' style={{ letterSpacing: '2px' }}>
            {libraryData.title}
          </p>
          <p className='text-base text-blue-600/50'>완료일 : {libraryData.doneDate ? '2023-11-15' : '-'}</p>
        </div>
        <div className='flex justify-center items-center gap-5'>
          <p> 진행도: </p>
          <div className='flex justify-end items-center'>
            {/* <p>{newProgress}%</p> */}
            <p>{newProgress}%</p>
            {/* <SemiCircleGauge gauge={newProgress} /> */}
          </div>
        </div>
      </div>
    </S.MainContainer>
  );
}

export default SpeakingStudyItem;
