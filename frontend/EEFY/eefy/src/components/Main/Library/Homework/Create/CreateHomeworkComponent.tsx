'use client';
import HomeworkInfo from './HomeworkInfo';
import HomeworkProduce from './HomeworkProduce';

import { useRecoilState, useRecoilValue } from 'recoil';
import { CreateHomeworkStepAtom } from '@/recoil/Library/CreateHomework/CreateHomework';
import { HomeworkCategoryAtom, HomeworkInfoDataAtom } from '@/recoil/Library/CreateHomework/CreateHomework';

import { TfiArrowLeft, TfiArrowRight } from 'react-icons/tfi';
import * as S from '@/styles/MainStyle.style';

function CreateHomeworkComponent() {
  const [createHomeworkStep, setCreateHomeworkStep] = useRecoilState(CreateHomeworkStepAtom);
  const homeworkInfoDataAtom = useRecoilValue(HomeworkInfoDataAtom);
  const homeworkCategory = useRecoilValue(HomeworkCategoryAtom);

  const NextHandler = () => {
    console.log('homeworkcategry', homeworkInfoDataAtom);
    // homeworkCategory 정보 확인 // title 입력 되었는지, 설명 입력되었는지, category 설정 되어 있는지
    // axios 연결

    setCreateHomeworkStep(1);
  };

  const CompleteHandler = () => {
    if (homeworkCategory === 'speak') {
      console.log(homeworkCategory);
    } else if (homeworkCategory === 'read') {
      console.log(homeworkCategory);
    } else if (homeworkCategory === 'listening') {
      console.log(homeworkCategory);
    }
  };

  return (
    <S.MainContainer className='relative w-full h-full flex justify-center items-center'>
      {createHomeworkStep === 0 ? <HomeworkInfo /> : <HomeworkProduce />}
      <div className='absolute' style={{ bottom: '5%', right: '3%' }}>
        {createHomeworkStep === 0 ? (
          <div className='text-xl uppercase flex items-center gap-2' onClick={NextHandler}>
            <p>Next</p>
            <TfiArrowRight className='text-2xl' />
          </div>
        ) : (
          <>
            {homeworkCategory !== 'read' && (
              <div className='flex items-center justify-end gap-5'>
                <div className='text-xl uppercase flex items-center gap-2' onClick={() => setCreateHomeworkStep(0)}>
                  <TfiArrowLeft className='text-2xl' />
                  <p>prev</p>
                </div>
                <div className='text-xl uppercase flex items-center gap-2' onClick={CompleteHandler}>
                  <p>Complete</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </S.MainContainer>
  );
}

export default CreateHomeworkComponent;
