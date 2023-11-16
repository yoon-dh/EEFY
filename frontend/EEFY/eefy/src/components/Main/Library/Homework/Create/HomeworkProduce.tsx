'use client';
import CreateSpeakingComponent from './Speaking/CreateSpeakingComponent';
import CreateReadingComponent from './Reading/CreateReadingComponent';
import CreateListeningComponent from './Listening/CreateListeningComponent';

import { useRecoilValue } from 'recoil';
import { HomeworkCategoryAtom } from '@/recoil/Library/CreateHomework/CreateHomework';

function HomeworkProduce() {
  const homeworkCategory = useRecoilValue(HomeworkCategoryAtom);

  return (
    <>
      {homeworkCategory === 'SPEAKING' && <CreateSpeakingComponent />}
      {homeworkCategory === 'READING' && <CreateReadingComponent />}
      {homeworkCategory === 'LISTENING' && <CreateListeningComponent />}
    </>
  );
}

export default HomeworkProduce;
