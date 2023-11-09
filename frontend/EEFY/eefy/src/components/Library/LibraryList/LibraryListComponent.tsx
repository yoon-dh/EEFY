'use client';
import { WorkbookBox } from './LibraryList.style';
import LibraryItem from './LibraryItem';
import { HiPlus } from 'react-icons/hi';

const dummyData = [
  {
    ID: 1,
    title: 'TOEIC 900점 완성 - Grammary part1',
    questionNumber: 20,
    coverColor: 1,
  },
  {
    ID: 1,
    title: 'TOEIC 900점 완성 - Grammary part1',
    questionNumber: 20,
    coverColor: 1,
  },
  {
    ID: 1,
    title: 'TOEIC 900점 완성 - Grammary part1',
    questionNumber: 20,
    coverColor: 1,
  },
  {
    ID: 1,
    title: 'TOEIC 900점 완성 - Grammary part1',
    questionNumber: 20,
    coverColor: 1,
  },
  {
    ID: 1,
    title: 'TOEIC 900점 완성 - Grammary part1',
    questionNumber: 20,
    coverColor: 1,
  },
  {
    ID: 1,
    title: 'TOEIC 900점 완성 - Grammary part1',
    questionNumber: 20,
    coverColor: 1,
  },
  {
    ID: 1,
    title: 'TOEIC 900점 완성 - Grammary part1',
    questionNumber: 20,
    coverColor: 1,
  },
  {
    ID: 1,
    title: 'TOEIC 900점 완성 - Grammary part1',
    questionNumber: 20,
    coverColor: 1,
  },
  {
    ID: 1,
    title: 'TOEIC 900점 완성 - Grammary part1',
    questionNumber: 20,
    coverColor: 1,
  },
  {
    ID: 1,
    title: 'TOEIC 900점 완성 - Grammary part1',
    questionNumber: 20,
    coverColor: 1,
  },
];

function LibraryListComponent() {
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
    <div className='w-full h-full flex flex-wrap justify-between'>
      <div className='relative flex justify-center items-center' style={{ width: '25%', height: '50%' }}>
        <WorkbookBox style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
          <div style={{ fontSize: '40px' }}>
            <HiPlus />
          </div>
          <div className='prim' style={{ fontSize: '20px' }}>
            자료 등록
          </div>
        </WorkbookBox>
      </div>
      <LibraryItem main={colerData[0].main} shadow={colerData[0].shadow} />
      <LibraryItem main={colerData[1].main} shadow={colerData[1].shadow} />
      <LibraryItem main={colerData[2].main} shadow={colerData[2].shadow} />
      <LibraryItem main={colerData[3].main} shadow={colerData[3].shadow} />
      <LibraryItem main={colerData[4].main} shadow={colerData[4].shadow} />
      <LibraryItem main={colerData[5].main} shadow={colerData[5].shadow} />
      <LibraryItem main={colerData[6].main} shadow={colerData[6].shadow} />
    </div>
  );
}

export default LibraryListComponent;
