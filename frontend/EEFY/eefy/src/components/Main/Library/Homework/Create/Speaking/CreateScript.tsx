'use client';

import Image from 'next/image';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { HomeworkIdAtom, HomeworkInfoDataAtom } from '@/recoil/Library/CreateHomework/CreateHomework';
import { STTLoadingAtom, SpeakingFileInfoAtom, SpeakingAllFilesInfoAtom } from '@/recoil/Library/CreateHomework/CreateSpeaking';

import { postHomeworkMakeQuestion } from '@/api/Library/CreateHomeworkApi';

import * as S from '../CreateHomework.style';

function CreateScript() {
  const sttLoading = useRecoilValue(STTLoadingAtom);
  const homeworkId = useRecoilValue(HomeworkIdAtom);
  const homeworkInfoData = useRecoilValue(HomeworkInfoDataAtom);
  const [speakingFileInfo, setSpeakingFileInfo] = useRecoilState(SpeakingFileInfoAtom);
  const setSpeakingAllFilseInfo = useSetRecoilState(SpeakingAllFilesInfoAtom);

  const InputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSpeakingFileInfo(prev => ({ ...prev, script: e.target.value }));
  };

  const CancleHandler = () => {
    setSpeakingFileInfo(prev => ({ ...prev, file: undefined, script: '' }));
  };

  const SaveHandler = async () => {
    if (speakingFileInfo.file !== undefined) {
      console.log(speakingFileInfo.file);
      const formData = new FormData();
      const makeHomeworkQuestionRequest = {
        homeworkId: homeworkId,
        title: homeworkInfoData.title,
        field: 'VOICE',
        content: speakingFileInfo.script,
        answer: null,
        choiceRequests: null,
      };
      const jsonBlob = new Blob([JSON.stringify(makeHomeworkQuestionRequest)], {
        type: 'application/json',
      });
      formData.append('makeHomeworkQuestionRequest', jsonBlob);
      formData.append('voiceFile', speakingFileInfo.file);
      await postHomeworkMakeQuestion(formData);
    } else {
      alert('음성 파일이 존재하지 않습니다.');
    }

    setSpeakingAllFilseInfo(prev => [...prev, speakingFileInfo]);
    setSpeakingFileInfo(prev => ({ ...prev, file: undefined, script: '' }));
  };

  return (
    <>
      {sttLoading ? (
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <Image src={'/Img/SpinnerSample.gif'} alt='로딩' width={150} height={150} />
        </div>
      ) : (
        <>
          <div className='w-full h-full flex flex-col'>
            <S.CreateTextArea className='bg-white' style={{ flex: 5 }} value={speakingFileInfo.script} onChange={InputHandler} />
            <div className='relative' style={{ flex: 1 }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0 }}>
                <audio controls className=' w-80 h-[50px]'>
                  {speakingFileInfo.file !== undefined ? (
                    // <source src={speakingFileInfo.file} type='audio/*' />
                    <source src={window.URL.createObjectURL(speakingFileInfo.file)} type='audio/mp4' />
                  ) : (
                    <div>오디오 파일이 비었습니다.</div>
                  )}
                </audio>
              </div>
              <div className='flex gap-5 items-center' style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <S.CreateBtn className='text-xl' style={{ width: '120px', height: '50px' }} onClick={CancleHandler}>
                  Cancle
                </S.CreateBtn>
                <S.CreateBtn className='text-xl' style={{ width: '120px', height: '50px' }} onClick={SaveHandler}>
                  Save
                </S.CreateBtn>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CreateScript;
