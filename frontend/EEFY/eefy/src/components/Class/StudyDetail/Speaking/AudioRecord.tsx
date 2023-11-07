'use client';
import React, { useState, useCallback, useRef, useEffect } from 'react';

import { BsMic, BsFillStopFill } from 'react-icons/bs';
import * as S from './SpeakinigStyles';
// import * as I from './ImageComponents';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { IsRecording, IsModalOpen, RecordAudioUrl } from '@/recoil/StudyDetails/SpeakDetails';

function AudioRecord() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

  const [isRecording, setIsRecording] = useRecoilState(IsRecording);
  const [blobData, setBlobData] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [time, setTime] = useState<number>(0);

  const setIsModalOpen = useSetRecoilState(IsModalOpen);
  const setRecordAudioUrl = useSetRecoilState(RecordAudioUrl);

  // 음성 녹음 시작
  const onRecord = async () => {
    const newStream = await navigator.mediaDevices.getUserMedia({ audio: true }); // 마이크 사용 권한 획득
    const newMediaRecorder = new MediaRecorder(newStream);
    newMediaRecorder.start();
    console.log('mediaRecorder', newMediaRecorder);
    setStream(newStream);
    setMediaRecorder(newMediaRecorder);
    setIsRecording(true);
  };

  // 사용자가 음성 녹음을 중지했을 때
  const offRecord = async () => {
    if (mediaRecorder && mediaRecorder.state == 'recording') {
      // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
      mediaRecorder.ondataavailable = e => {
        console.log('ondata', e);
        const newAudioUrl = URL.createObjectURL(e.data);
        setRecordAudioUrl(newAudioUrl);
        setBlobData(e.data);
        setIsRecording(false);
      };
      // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
      stream?.getAudioTracks().forEach(function (track) {
        track.stop();
      });
      // 미디어 캡처 중지
      mediaRecorder.stop();

      // 시간 초기화
      setTime(0);

      // await onSubmitAudioFile();
      // 모달창 열기
      setIsModalOpen(true);
    }
  };

  // 결과확인
  const onSubmitAudioFile = useCallback(() => {
    if (blobData) {
      const newAudioUrl = URL.createObjectURL(blobData);
      setAudioUrl(newAudioUrl); // 해당 주소에서 녹음된 오디오 확인 가능
      // setRecordAudioUrl(newAudioUrl);
      console.log(newAudioUrl);
      // File 생성자를 사용해 파일로 변환
      const sound = new File([blobData], 'soundBlob', { lastModified: new Date().getTime(), type: 'audio' });
      console.log('sound', sound); // File 정보 출력
    }
  }, [blobData]);

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
  );
}

export default AudioRecord;
