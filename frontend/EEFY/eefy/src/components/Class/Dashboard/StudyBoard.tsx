'use client';
import Link from 'next/link';
import { StudyCardBox } from './ClassStyles';
import RadialProgress from './RadialProgress';

function StudyBoard() {
  const myStyle = {
    display: 'grid',
    gridTemplateCols: 'repeat(1, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridTemplateAreas: "'study2' 'study2' 'study3'",
  };

  const data = [
    {
      title: 'TOEIC 필수 20제',
      content: '20 questions',
      progress: 95,
    },
    {
      title: 'TEPS 대비 기출',
      content: '30 questions',
      progress: 100,
    },
    {
      title: 'TEPS 완성 기출 100선 (상) ',
      content: '30 questions',
      progress: 55,
    },
    {
      title: 'TOEIC 빈출문제',
      content: '10 questions',
      progress: 5,
    },
  ];
  return (
    <div className='w-full h-full flex flex-col'>
      <div className='flex justify-between text-xl font-bold 2xl:text-2xl' style={{ flex: 1, padding: '0 1%' }}>
        <div>과제</div>
        <Link href={'/'} style={{ fontSize: '20px', color: '#3C80F7' }}>
          View all
        </Link>
      </div>
      <div className='w-full h-full flex items-end justify-between' style={{ flex: 4 }}>
        {data.map((item, idx) => (
          <StudyCardBox key={idx} $isNotActive={false} className='bg-base-200 rounded-lg boxShadow'>
            <div className='absolute' style={{ top: '15%', left: '10%' }}>
              <RadialProgress percent={item.progress} />
            </div>
            <div className='absolute' style={{ top: '60%', left: '10%', right: '10%', bottom: '10%' }}>
              <div className='whitespace-nowrap text-ellipsis overflow-hidden font-bold'>{item.title}</div>
              <div className='text-base text-opacity-70'>{item.content}</div>
            </div>
          </StudyCardBox>
        ))}
      </div>
    </div>
  );
}

export default StudyBoard;
