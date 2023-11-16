'use client';
import React, { useEffect, useRef, useState } from 'react';

import { IsModalOpen, IsRecording, IsSolved, QuestionInfo } from '@/recoil/StudyDetails/SpeakDetails';
import { postHomeworkSolve } from '@/api/Class/studylist';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CurrentHomeworkInfo } from '@/recoil/StudyList/StudyList';

import { BsMic, BsFillStopFill } from 'react-icons/bs';
import * as S from './SpeakinigStyles';
// import * as I from './ImageComponents';

import AudioPlayer from './AudioPlayer';
import { RecordRTCPromisesHandler, StereoAudioRecorder } from 'recordrtc';
import { postSTT } from '@/api/Library/CreateHomeworkApi';

function SolvingQuestion() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(IsModalOpen);

  const currentHomeworkInfo = useRecoilValue(CurrentHomeworkInfo);
  const [questionData, setQuestionData] = useRecoilState(QuestionInfo);
  const setIsSolved = useSetRecoilState(IsSolved);

  // 저장 취소
  const cancleHandler = () => {
    setIsModalOpen(false);
  };

  const submitHandler = async () => {
    // 서버로 STT 요청
    // setIsModalOpen(false); // 모달창 닫기
    // setIsSolved(true); // SolvedQuestion 컴포넌트로 변경
    if (blob) {
      // const sttFormData = new FormData();
      // sttFormData.append('file', blob, 'tmp.webm');
      // const sttResponseData = await postSTT(sttFormData);
      // console.log('stt 성공');

      const formData = new FormData();
      const solveProblemRequest = {
        homeworkQuestionId: questionData.id,
        homeworkStudentId: currentHomeworkInfo?.homeworkStudentId,
        submitAnswer: 'string',
      };
      console.log('solveProblemRequest', solveProblemRequest);
      const jsonBlob = new Blob([JSON.stringify(solveProblemRequest)], {
        type: 'application/json',
      });
      formData.append('solveProblemRequest', jsonBlob);
      formData.append('voiceFile', blob, 'tmp.webm');
      const responseData = await postHomeworkSolve(formData);
      console.log('채점 성공', responseData);

      setIsModalOpen(false); // 모달창 닫기
      setIsSolved(true); // SolvedQuestion 컴포넌트로 변경
    }
  };

  // AudioRecord-------------------------------------

  const [isRecording, setIsRecording] = useRecoilState(IsRecording);

  const recorderRef = useRef<any>();
  const [blob, setBlob] = useState<Blob | undefined>();
  const [blobUrl, setBlobUrl] = useState<any>();
  const [mediaStream, setMediaStream] = useState<MediaStream | undefined>();
  const [time, setTime] = useState<number>(0);

  // 음성 녹음 시작
  const onRecord = async () => {
    let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    let recorder = new RecordRTCPromisesHandler(stream, {
      type: 'audio',
      mimeType: 'audio/wav',
      recorderType: StereoAudioRecorder,
      numberOfAudioChannels: 1,
      desiredSampRate: 16000,
      bufferSize: 16384,
    });

    // 녹음 시작
    recorder.startRecording();
    recorderRef.current = recorder;
    setMediaStream(stream);
    setIsRecording(true);
  };

  // 음성 녹음 중지
  const offRecord = async () => {
    // 녹음 중지
    await recorderRef.current.stopRecording();
    // 마이크 트랙 정지
    await mediaStream?.getAudioTracks().forEach((track: any) => track.stop());
    setBlob(recorderRef.current.blob);
    setBlobUrl(recorderRef.current.toURL);

    recorderRef.current = undefined;
    setIsRecording(false);
    setTime(0); // 시간 초기화
    setIsModalOpen(true); // 모달창 열기
    setMediaStream(undefined);
  };

  // 타이머
  useEffect(() => {
    let intervalId: undefined | number | NodeJS.Timeout;

    if (isRecording) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    return formattedTime;
  };

  return (
    <div className='relative w-full h-full'>
      {/* 모달창 여부 */}
      {isModalOpen ? (
        <>
          <div
            className='absolute flex flex-col justify-between bg-base-300 boxShadow'
            style={{ top: '5%', bottom: '5%', left: '30%', right: '30%', padding: '1%' }}
          >
            <div className='flex flex-col gap-2'>
              <div className='text-xl font-bold text-[#6D79E2]'>녹음된 파일을 제출하시겠습니까?</div>
              <div className='text-sm'>제출 시 이전 녹음파일은 사라집니다.</div>
            </div>
            {/* {blob && window && <AudioPlayer url={blobUrl} />} */}
            {blob && <AudioPlayer url={window.URL.createObjectURL(blob)} />}
            <div className='flex text-lg justify-end gap-5'>
              <button className='w-28 h-10 font-bold text-success boxShadow hover:scale-110' onClick={cancleHandler}>
                취소
              </button>
              <button className='w-28 h-10 font-bold text-error boxShadow hover:scale-110' onClick={submitHandler}>
                제출
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=' relative h-full w-full'>
            <div
              className={`absolute text-2xl font-bold ${isRecording ? 'text-error' : 'text-primary'}`}
              style={{ top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              {isRecording ? 'Recording...' : 'Start Recording!'}
            </div>

            <S.RecordBtn
              className={`${isRecording ? 'bg-error hover:bg-error-focus' : 'bg-primary hover:bg-primary-focus'} hover:boxShadow`}
              onClick={isRecording ? offRecord : onRecord}
            >
              {isRecording ? <BsFillStopFill /> : <BsMic />}
            </S.RecordBtn>

            <div className='absolute text-md ' style={{ bottom: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              {isRecording ? `${formatTime(time)}` : 'Start recording your assignments'}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SolvingQuestion;

// -------------------------------------------------------------------------
// 'use client';
// import AudioRecord from './AudioRecord';
// import Modal from './Modal';

// import { useRecoilValue } from 'recoil';
// import { IsModalOpen } from '@/recoil/StudyDetails/SpeakDetails';

// function SolvingQuestion() {
//   const isModalOpen = useRecoilValue(IsModalOpen);

//   return (
//     <div className='relative w-full h-full'>
//       {/* 모달창 여부 */}
//       {isModalOpen ?
//       <Modal />
//       :
//       <AudioRecord />}
//     </div>
//   );
// }

// export default SolvingQuestion;

// if (mediaRecorder && mediaRecorder.state == 'recording') {
// dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
// mediaRecorder.ondataavailable = e => {
//   const sound = new File([e.data], 'soundBlob', { type: 'audio/wav;codecs=pcm' });
//   setRecordAudioUrl(sound);
//   setBlobData(e.data);
//   setIsRecording(false);
// };
// 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
// stream?.getAudioTracks().forEach(function (track) {
//   track.stop();
// });
// 미디어 캡처 중지
// mediaRecorder.stop();
