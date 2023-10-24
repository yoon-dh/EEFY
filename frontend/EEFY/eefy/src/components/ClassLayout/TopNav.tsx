import React from 'react';
import NormalTag from './NormalTag';
import Link from 'next/link';

export default function TopNav() {
  return (
    <div className='w-full h-full'>
      <div className='flex h-full items-center'>
        <div className='flex-auto w-32 '>
          <img style={{ margin: 'auto' }} src={`/logo.png`} />
        </div>
        <div className='flex flex-auto justify-start items-center w-full h-full'>
          <NormalTag />
        </div>
      </div>
    </div>
  );
}
