'use client';

import { useRecoilState } from 'recoil';
import { HomeworkProblem } from '@/recoil/Homework';

import * as S from '../CreateHomework.style';

interface HomeworkProblemType {
  title: string;
  content: string;
  choiceRequests: any;
}

function SaveQuestions() {
  const [homeworkProblem, setHomeworkProblem] = useRecoilState<HomeworkProblemType[]>(HomeworkProblem);

  return (
    <div className='w-full h-full relative'>
      <div className='absolute overflow-auto no-scrolle' style={{ top: '2%', bottom: '50px', left: '2%', right: '2%' }}>
        {homeworkProblem.map((item, idx) => {
          if (item.title) {
            return (
              <div key={idx} className='h-12 flex items-center'>
                <S.ListBtn>{item.title}</S.ListBtn>
              </div>
            );
          }
        })}
      </div>
      <div className='absolute w-auto' style={{ bottom: '0%', left: '5%' }}>
        등록된 문제 수 : {homeworkProblem.length}
      </div>
    </div>
  );
}

export default SaveQuestions;
