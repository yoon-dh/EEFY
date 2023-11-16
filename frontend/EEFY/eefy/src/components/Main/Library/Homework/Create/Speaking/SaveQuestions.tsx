'use client';

import { useRecoilState } from 'recoil';
import { SpeakingAllFilesInfoAtom } from '@/recoil/Library/CreateHomework/CreateSpeaking';

import * as S from '../CreateHomework.style';

function SaveQuestions() {
  const [speakingAllFilseInfo, setSpeakingAllFilseInfo] = useRecoilState(SpeakingAllFilesInfoAtom);
  console.log(speakingAllFilseInfo);
  return (
    <div className='w-full h-full relative'>
      <div className='absolute overflow-auto no-scrolle' style={{ top: '2%', bottom: '50px', left: '2%', right: '2%' }}>
        {speakingAllFilseInfo.map((item, idx) => {
          if (item.file) {
            return (
              <div key={idx} className='h-12 flex items-center'>
                <S.ListBtn>{item.file.name}</S.ListBtn>
              </div>
            );
          }
        })}
      </div>
      <div className='absolute w-auto' style={{ bottom: '0%', left: '5%' }}>
        등록된 문제 수 : {speakingAllFilseInfo.length}
      </div>
    </div>
  );
}

export default SaveQuestions;
