'use client';

import FileUpload from './FileUpload';
import CreateScript from './CreateScript';
import SaveQuestions from './SaveQuestions';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { SpeakingFileInfoAtom, SpeakingAllFilesInfoAtom } from '@/recoil/Library/CreateHomework/CreateSpeaking';

import * as S from '@/styles/MainStyle.style';
import { useEffect } from 'react';

function CreateSpeakingComponent() {
  const mainStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)',
    gridTemplateAreas: "'b b b c' 'b b b c' 'b b b c' 'b b b c' 'b b b c' 'b b b c' 'b b b c' 'b b b c' 'd d d d' ",
    rowGap: '3%',
    columnGap: '3%',
  };

  const [speakingFileInfo, setSpeakingFileInfo] = useRecoilState(SpeakingFileInfoAtom);
  const setSpeakingAllFilseInfo = useSetRecoilState(SpeakingAllFilesInfoAtom);

  useEffect(() => {
    // 새로운 마운트시 데이터 초기화
    setSpeakingFileInfo({ file: undefined, script: '' });
    setSpeakingAllFilseInfo([]);
  }, []);

  return (
    <div className='w-full h-full' style={{ padding: '2% 3%' }}>
      <div className='w-full h-full' style={mainStyle}>
        <S.MainContainer style={{ gridArea: 'b', padding: '2% 3%' }}>
          {speakingFileInfo.file ? (
            <CreateScript />
          ) : (
            <div className='w-full h-full flex flex-col justify-center items-center text-xl gap-5'>
              <div>파일을 업로드하면 자동으로 스크립트가 생성됩니다.</div>
              <div>파일을 저장하면 더 이상 수정이 불가능합니다.</div>
            </div>
          )}
        </S.MainContainer>
        <S.MainContainer style={{ gridArea: 'c', padding: '5% 3%' }}>
          <SaveQuestions />
        </S.MainContainer>
        <div className='flex items-end' style={{ gridArea: 'd' }}>
          <FileUpload />
        </div>
      </div>
    </div>
  );
}

export default CreateSpeakingComponent;
