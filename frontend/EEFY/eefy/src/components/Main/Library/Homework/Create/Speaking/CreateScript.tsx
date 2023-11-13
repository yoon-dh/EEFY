'use client';

import Image from 'next/image';

import { useRecoilState } from 'recoil';
import { STTLoadingAtom, SpeakingFileInfoAtom, SpeakingAllFilesInfoAtom } from '@/recoil/Library/CreateHomework/CreateSpeaking';

import * as S from '../CreateHomework.style';

function CreateScript() {
  const [sttLoading, setSttLoading] = useRecoilState(STTLoadingAtom);
  const [speakingFileInfo, setSpeakingFileInfo] = useRecoilState(SpeakingFileInfoAtom);
  const [speakingAllFilseInfo, setSpeakingAllFilseInfo] = useRecoilState(SpeakingAllFilesInfoAtom);

  const InputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSpeakingFileInfo(prev => ({ ...prev, script: e.target.value }));
  };

  const CancleHandler = () => {
    setSpeakingFileInfo(prev => ({ ...prev, file: undefined, script: '' }));
  };

  const SaveHandler = async () => {
    // api 요청 필요
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
                    <source src={URL.createObjectURL(speakingFileInfo.file)} type='audio/mp4' />
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
