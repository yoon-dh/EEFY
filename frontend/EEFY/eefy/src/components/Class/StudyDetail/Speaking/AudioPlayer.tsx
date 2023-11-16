'use client';
import React from 'react';

interface PropsType {
  url: string | any;
}

function AudioPlayer({ url }: PropsType) {
  return (
    <div>
      <audio controls className=' w-80'>
        {url !== null ? <source src={url} type='audio/mp4' /> : <div>오디오 파일이 비었습니다.</div>}
      </audio>
    </div>
  );
}

export default AudioPlayer;
