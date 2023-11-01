'use client';
import { useState } from 'react';
import AudioRecord from './AudioRecord';
import * as I from './ImageComponents';

function RecordingComponent() {
  const dummyData: string[] = [];

  const [recordActive, setRecordActive] = useState(false);

  return (
    <>
      {recordActive ? (
        <>
          <div className='w-full h-full flex flex-col items-center justify-around' style={{ letterSpacing: '1px' }}>
            <p className='text-2xl font-bold' style={{ letterSpacing: '2px' }}>
              Start Recordings!
            </p>
            <div>
              <I.MicrophoneBtn bgColor={'#057AFF'} innerColor={'rgba(255, 255, 255, 0.5)'} isActive={true} />
            </div>
            <AudioRecord />
            <div className='flex flex-col items-center'>
              <p className='text-md font-bold ' style={{ color: 'rgba(123, 123, 123, 0.9)' }}>
                Start recording
              </p>
              <p className='text-md font-bold ' style={{ color: 'rgba(123, 123, 123, 0.9)' }}>
                your assignments
              </p>
            </div>
          </div>
          {/* 녹음 버튼 */}
          <div className='absolute bottom-5 right-5 w-44 h-14 bg-secondary rounded-md flex justify-center items-center'>
            <p className='text-secondary-content' style={{ fontWeight: '600' }}>
              - 녹음 중단
            </p>
          </div>
        </>
      ) : (
        <>
          {dummyData.length === 0 ? (
            // 녹음된 파일이 아무것도 없는 경우
            <div className='w-full h-full flex flex-col items-center justify-around' style={{ letterSpacing: '1px' }}>
              <p className='text-2xl font-bold' style={{ letterSpacing: '2px', color: 'rgba(123, 123, 123, 0.9)' }}>
                No Recordings yet.
              </p>
              <I.MicrophoneBtn bgColor={'rgba(123, 123, 123, 0.9)'} innerColor={'rgba(255, 255, 255, 0.5)'} isActive={false} />
              <div className='flex flex-col items-center'>
                <p className='text-md font-bold ' style={{ color: 'rgba(123, 123, 123, 0.9)' }}>
                  Start recording
                </p>
                <p className='text-md font-bold ' style={{ color: 'rgba(123, 123, 123, 0.9)' }}>
                  your assignments
                </p>
              </div>
            </div>
          ) : (
            // 녹음된 파일이 있는 경우
            <div>
              <p>스크립트 컴포넌트</p>
              {/* 오디오 파일 버튼 */}
              <div className='absolute bottom-5 right-52  w-44 h-14 bg-secondary rounded-md flex justify-center items-center gap-5'>
                <I.DownBtn btnSize={24} btnColor={'white'} />
                <p className='text-secondary-content' style={{ fontWeight: '600' }}>
                  Audio File
                </p>
              </div>
            </div>
          )}
          {/* 녹음 버튼 */}
          <div className='absolute bottom-5 right-5 w-44 h-14 bg-secondary rounded-md flex justify-center items-center' onClick={() => setRecordActive(true)}>
            <p className='text-secondary-content' style={{ fontWeight: '600' }}>
              + New Recording
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default RecordingComponent;
