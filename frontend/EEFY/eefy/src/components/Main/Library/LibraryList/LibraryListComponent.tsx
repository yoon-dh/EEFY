'use client';
import Link from 'next/link';
import { HiPlus } from 'react-icons/hi';

import LibraryItem from './LibraryItem';

import { WorkbookBox } from './LibraryList.style';

interface LibraryListComponentProps {
  role: string;
  libraryDatas:
    | {
        content: string;
        createdAt: Date;
        id: number;
        isFinish: boolean;
        memberId: number;
        modifiedAt: Date;
        title: string;
        type: string;
      }[]
    | null;
}

interface DataType {
  SPEAKING: number;
  READING: number;
  LISTENING: number;
  [key: string]: any;
}

function LibraryListComponent({ role, libraryDatas }: LibraryListComponentProps) {
  const dataType: DataType = {
    SPEAKING: 0,
    READING: 1,
    LISTENING: 2,
  };

  const colerData = [
    {
      main: '#BEDFFF',
      shadow: '#85B8EB',
    },
    {
      main: '#D3D3D3',
      shadow: '#A8A6A6',
    },
    {
      main: '#BAE4BE',
      shadow: '#9BCC9D',
    },
    {
      main: '#FFE4B0',
      shadow: '#E4C280',
    },
    {
      main: '#C5E8F3',
      shadow: '#8EC7D3',
    },
    {
      main: '#FAD5B4',
      shadow: '#F0B184',
    },
    {
      main: '#DEE4BA',
      shadow: '#B9D38E',
    },
  ];
  return (
    <div className='w-full h-full flex flex-wrap'>
      {role === 'teacher' && (
        <div className='relative flex justify-center items-center' style={{ width: '25%', height: '50%' }}>
          <Link href={'/main/library/homework/create'}>
            <WorkbookBox style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
              <div style={{ fontSize: '40px' }}>
                <HiPlus />
              </div>
              <div className='prim' style={{ fontSize: '20px' }}>
                과제 생성
              </div>
            </WorkbookBox>
          </Link>
        </div>
      )}
      {libraryDatas?.map((item, idx) => (
        <LibraryItem
          key={`libraryList_${idx}`}
          main={colerData[dataType[item.type]].main}
          shadow={colerData[dataType[item.type]].shadow}
          role={role}
          libraryData={item}
        />
      ))}
    </div>
  );
}

export default LibraryListComponent;
