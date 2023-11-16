'use client';

import { useEffect, useRef } from 'react';
import { postSTT } from '@/api/Library/CreateHomeworkApi';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { STTLoadingAtom, SpeakingFileInfoAtom } from '@/recoil/Library/CreateHomework/CreateSpeaking';

function FileUpload() {
  const [speakingFileInfo, setSpeakingFileInfo] = useRecoilState(SpeakingFileInfoAtom);
  const [sttLoading, setSTTLoading] = useRecoilState(STTLoadingAtom);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (speakingFileInfo.file !== undefined && fileInputRef.current) {
        console.log(speakingFileInfo.file);
        const formData = new FormData();
        formData.append('file', speakingFileInfo.file);
        const data = await postSTT(formData);
        const script = !!data.content ? data.content : '';
        setSpeakingFileInfo(prev => ({ ...prev, script: script }));
      } else {
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
      setSTTLoading(false);

      // await setTimeout(() => {
      //   setSTTLoading(false);
      // }, 1000); // 임시
    }
    fetchData();
  }, [speakingFileInfo.file]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeakingFileInfo(prev => ({ ...prev, file: e.target.files?.[0] }));
    setSTTLoading(true);
  };

  return <input type='file' accept='audio/*' ref={fileInputRef} className='file-input file-input-bordered w-full max-w-md' onChange={onChangeHandler} />;
}

export default FileUpload;
