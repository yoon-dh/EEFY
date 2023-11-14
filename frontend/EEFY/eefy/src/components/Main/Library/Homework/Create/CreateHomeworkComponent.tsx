'use client';
import HomeworkInfo from './HomeworkInfo';
import HomeworkProduce from './HomeworkProduce';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CreateHomeworkStepAtom } from '@/recoil/Library/CreateHomework/CreateHomework';
import { HomeworkCategoryAtom, HomeworkInfoDataAtom, HomeworkIdAtom } from '@/recoil/Library/CreateHomework/CreateHomework';

import { postMakeHomework } from '@/api/Library/CreateHomeworkApi';

import { TfiArrowLeft, TfiArrowRight } from 'react-icons/tfi';
import * as S from '@/styles/MainStyle.style';

function CreateHomeworkComponent() {
  const [createHomeworkStep, setCreateHomeworkStep] = useRecoilState(CreateHomeworkStepAtom);
  const homeworkInfoDataAtom = useRecoilValue(HomeworkInfoDataAtom);
  const homeworkCategory = useRecoilValue(HomeworkCategoryAtom);
  const setHomeworkId = useSetRecoilState(HomeworkIdAtom);

  const NextHandler = async () => {
    if (homeworkInfoDataAtom.title !== '' && homeworkInfoDataAtom.description !== '') {
      const data = {
        title: homeworkInfoDataAtom.title,
        content: homeworkInfoDataAtom.description,
        type: homeworkCategory,
      };
      const requestData = await postMakeHomework(data);
      if (requestData) {
        setHomeworkId(requestData.homeworkId);
        setCreateHomeworkStep(1);
      } else {
        alert('문제 생성에 실패하였습니다.');
      }
    } else {
      alert('정보를 입력하세요');
    }
    // homeworkCategory 정보 확인 // title 입력 되었는지, 설명 입력되었는지, category 설정 되어 있는지
    // axios 연결
  };

  const CompleteHandler = () => {
    if (homeworkCategory === 'SPEAKING') {
      console.log(homeworkCategory);
    } else if (homeworkCategory === 'READING') {
      console.log(homeworkCategory);
    } else if (homeworkCategory === 'LISTENING') {
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
