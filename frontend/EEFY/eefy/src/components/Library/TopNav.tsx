import React from 'react';
import NormalTag from './NormalTag';
import Link from 'next/link';

export default function TopNav() {
  return (
    <div className='w-full h-full'>
      <div className='flex h-full items-center'>
        <div className='flex flex-auto justify-start items-center w-full h-full'>
          <NormalTag />
        </div>
      </div>
    </div>
  );
}