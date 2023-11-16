'use client';
import AudioPlayer from './AudioPlayer';
import Rating from './Rating';
import SemiCircleGauge from './SemiCircleGuage';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { StudentQuestionInfo, IsSolved } from '@/recoil/StudyDetails/SpeakDetails';
import { useEffect, useState } from 'react';
import { postSTT } from '@/api/Library/CreateHomeworkApi';

function SolvedQuestion({ solvedProblemData }: { solvedProblemData: any }) {
  console.log('blob?', typeof solvedProblemData?.filePath);
  const studentQuestionData = useRecoilValue(StudentQuestionInfo);
  const [isSolved, setIsSolved] = useRecoilState(IsSolved);
  // const setIsSolved = useSetRecoilState(IsSolved);
  const [sttScript, setSttScript] = useState('');

  const newRecording = () => {
    setIsSolved(false);
  };

  useEffect(() => {
    console.log('===============================');
    if (solvedProblemData) {
      const formData = new FormData();
      fetch(solvedProblemData.filePath)
        .then(response => response.blob())
        .then(blob => {
          formData.append('file', blob, 'tmp.webm');
          return postSTT(formData);
        })
        .then(responseData => setSttScript(responseData.content))
        .catch(error => {
          console.error('Error:', error);
        });
    }

    // const blobData = await audioUrl.blob();
    // const blob = new Blob([blobData], { type: 'audio/wav ' });
    // console.log('blob', blob);

    // const formData = new FormData();
    // const blobData = new Blob([solvedProblemData.filePath], { type: 'audio/wav' });
    // formData.append('file', blobData, 'tmp.webm');
    // console.log('solvedquestion에서 stt 실행');
    // const responseData = await postSTT(formData);
    // console.log('solvedquestion에서 stt 실행 성공', responseData);

    // setSttScript(responseData.content);
    // if (isSolved) {
    //   console.log(isSolved);
    // } else {
    //   setSttScript('');
    // }
  }, [solvedProblemData]);

  return (
    <div className='w-full h-full relative'>
      <div className='absolute overflow-auto no-scrollbar text-xl' style={{ top: '10%', bottom: '35%', left: '2%', right: '2%' }}>
        {/* {studentQuestionData.data?.script} */}
        {solvedProblemData && sttScript}
      </div>

      <div className=' absolute flex items-center gap-8' style={{ bottom: '5%', left: '2%' }}>
        <div className='flex items-end gap-5'>
          <div className='text-accent text-base font-bold'>발음분석평가</div>
          {solvedProblemData && solvedProblemData.score && <Rating score={Math.round((solvedProblemData.score / 100) * 100)} />}
        </div>
      </div>

      <div className='absolute h-fit flex items-end gap-5' style={{ bottom: '5%', right: '2%' }}>
        <div className='text-accent text-sm font-bold cursor-pointer hover:scale-110' onClick={newRecording}>
          +New Recording
        </div>
        {solvedProblemData && solvedProblemData.filePath && <AudioPlayer url={solvedProblemData.filePath} />}
        {/* <AudioPlayer url={studentQuestionData.data && studentQuestionData.data?.url} /> */}
      </div>
    </div>
  );
}

export default SolvedQuestion;
