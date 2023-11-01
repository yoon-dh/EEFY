'use client';
import React, { useState } from 'react';

function AudioRecord() {
  const [stream, setStram] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(true);

  return (
    <div>
      <button className=' btn-neutral btn-circle'>음성 녹음</button>
    </div>
  );
}

export default AudioRecord;
