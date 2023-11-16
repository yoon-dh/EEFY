'use client';
import * as S from './CreateHomework.style';
import RadioBtn from './RadioBtn';

import { useRecoilState } from 'recoil';
import { HomeworkInfoDataAtom } from '@/recoil/Library/CreateHomework/CreateHomework';

function HomeworkInfo() {
  const [homeworkInfo, setHomeworkInfo] = useRecoilState(HomeworkInfoDataAtom);

  return (
    <div className='w-full h-full flex justify-center' style={{ padding: '2% 3%' }}>
      <div className='w-full h-full flex flex-col justify-center items-center' style={{ width: '60%', gap: '5%' }}>
        <label className='flex flex-col' style={{ width: '100%', flex: 2, gap: '20px' }}>
          <div className='text-xl uppercase' style={{ letterSpacing: '2px' }}>
            Homework Name
          </div>
          <S.CreateInput
            type='text'
            className='relative h-[60px]'
            value={homeworkInfo.title}
            onChange={e => setHomeworkInfo(prev => ({ ...prev, title: e.target.value }))}
          />
        </label>

        <label className='flex flex-col' style={{ width: '100%', flex: 5, gap: '20px' }}>
          <div className='text-xl uppercase' style={{ letterSpacing: '2px' }}>
            Homework Description
          </div>
          <S.CreateInput
            type='text'
            className='relative h-full'
            value={homeworkInfo.description}
            onChange={e => setHomeworkInfo(prev => ({ ...prev, description: e.target.value }))}
          />
        </label>

        <div className='flex flex-col' style={{ width: '100%', flex: 1, gap: '20px' }}>
          <div className='text-xl uppercase' style={{ letterSpacing: '2px' }}>
            Homework Category
          </div>
          <RadioBtn />
        </div>
      </div>
    </div>
  );
}

export default HomeworkInfo;
