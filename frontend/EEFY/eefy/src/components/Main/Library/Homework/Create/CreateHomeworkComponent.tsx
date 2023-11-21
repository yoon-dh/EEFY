'use client';

import { useRouter } from 'next/navigation';

import HomeworkInfo from './HomeworkInfo';
import HomeworkProduce from './HomeworkProduce';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CreateHomeworkStepAtom } from '@/recoil/Library/CreateHomework/CreateHomework';
import { HomeworkCategoryAtom, HomeworkInfoDataAtom, HomeworkIdAtom } from '@/recoil/Library/CreateHomework/CreateHomework';

import { postMakeHomework, putMakeHomework } from '@/api/Library/CreateHomeworkApi';

import { TfiArrowLeft, TfiArrowRight } from 'react-icons/tfi';
import * as S from '@/styles/MainStyle.style';
import { useEffect } from 'react';
import { HomeworkProblem } from '@/recoil/Homework';

interface HomeworkProblemType {
  title: string;
  content: string;
  choiceRequests: any;
}

function CreateHomeworkComponent() {
  const router = useRouter();

  const [homeworkProblem, setHomeworkProblem] = useRecoilState<HomeworkProblemType[]>(HomeworkProblem);
  const [createHomeworkStep, setCreateHomeworkStep] = useRecoilState(CreateHomeworkStepAtom);
  const [homeworkInfoDataAtom, setHomeworkInfoDataAtom] = useRecoilState(HomeworkInfoDataAtom);
  const homeworkCategory = useRecoilValue(HomeworkCategoryAtom);
  const [homeworkId, setHomeworkId] = useRecoilState(HomeworkIdAtom);
  // const setHomeworkId = useSetRecoilState(HomeworkIdAtom);

  useEffect(() => {
    // 새로운 마운트 시 데이터 초기화
    setHomeworkInfoDataAtom({ title: '', description: '' });
    setHomeworkId(undefined);
    setCreateHomeworkStep(0);
  }, []);

  const NextHandler = async () => {
    if (homeworkInfoDataAtom.title !== '' && homeworkInfoDataAtom.description !== '') {
      const data = {
        title: homeworkInfoDataAtom.title,
        content: homeworkInfoDataAtom.description,
        type: homeworkCategory,
      };

      // 문제집 생성 서버에 요청
      const requestData = await postMakeHomework(data);
      if (requestData) {
        setHomeworkId(requestData.homeworkId);
        setCreateHomeworkStep(1);
      } else {
        // alert('문제 생성에 실패하였습니다.');
      }
    } else {
      // alert('정보를 입력하세요');
    }
  };

  const CancleHandler = () => {
    // alert('문제 생성을 취소합니다.');

    setHomeworkProblem([]);
    setHomeworkInfoDataAtom({ title: '', description: '' });
    setHomeworkId(undefined);
    setCreateHomeworkStep(0);
    router.push('/main/library/teacher');
  };

  const CompleteHandler = async () => {
    if (homeworkId !== undefined) {
      const requestData = { homeworkId: homeworkId };
      const res = await putMakeHomework(requestData);
      // alert('문제가 성공적으로 생성되었습니다.');
    }

    setHomeworkProblem([]);
    setHomeworkInfoDataAtom({ title: '', description: '' });
    setHomeworkId(undefined);
    setCreateHomeworkStep(0);
    router.push('/main/library/teacher');
  };

  return (
    <S.MainContainer className='relative w-full h-full flex justify-center items-center'>
      {createHomeworkStep === 0 ? <HomeworkInfo /> : <HomeworkProduce />}
      <div className='absolute' style={{ bottom: '5%', right: '3%' }}>
        {createHomeworkStep === 0 ? (
          <div className='flex items-center justify-end gap-10'>
            <div className='text-xl uppercase flex items-center gap-2' onClick={CancleHandler}>
              <p>Cancle</p>
            </div>
            <div className='text-xl uppercase flex items-center gap-2' onClick={NextHandler}>
              <p>Next</p>
              <TfiArrowRight className='text-2xl' />
            </div>
          </div>
        ) : (
          <>
            {homeworkCategory !== 'read' && (
              <div className='flex items-center justify-end gap-10'>
                <div className='text-xl uppercase flex items-center gap-2' onClick={CancleHandler}>
                  {/* <TfiArrowLeft className='text-2xl' /> */}
                  <p>Cancle</p>
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
