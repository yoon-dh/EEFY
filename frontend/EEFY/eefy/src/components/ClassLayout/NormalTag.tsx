import React, { Children } from 'react';

export default function NormalTag() {
  return (
    <div
      className='w-5/6 shadow-lg rounded-lg py-2 px-3'
      style={{
        background: 'linear-gradient(99deg, #999BD5 53.12%, #4F489B 155.43%)',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        border: '1px solid rgba(131, 129, 129, 0.2)',
        width: '98%',
        height: '80%',
      }}
    >
      <div className='flex justify-between'>
        <div className='ml-5 flex flex-col'>
          <div>
            <p className='text-xl font-bold'>TOEIC 함수 Grammer - part1</p>
          </div>
          <div>
            <p className='text-base text-blue-600/50'>완료일 : 2023. 10. 23.</p>
          </div>
        </div>
        <div className='mr-5 flex justify-center items-center'>
          <p className='text-sm font-extrabold '>점수: 90점</p>
        </div>
      </div>
    </div>
  );
}
