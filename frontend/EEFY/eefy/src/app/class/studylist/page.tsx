'use client';
import { useState } from 'react';
import SpeakingStudyItem from '@/components/Class/StudyList/SpeakingStudyItem';

interface DummyDataType {
  title: string;
  finishDate: string;
  pronunciationScore: number;
  accuracyScore: number;
}
const SpeakingDummyData: DummyDataType[] = [
  {
    title: 'TOEIC 필수 훈련 문장 - part3',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 3.0,
    accuracyScore: 80,
  },
  {
    title: 'TOEIC 필수 훈련 문장 - part2',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 0,
    accuracyScore: 70,
  },
  {
    title: 'TOEIC 필수 훈련 문장 - part1',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 4.5,
    accuracyScore: 60,
  },
  {
    title: 'TOEIC 필수 훈련 문장 - part3',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 5.0,
    accuracyScore: 50,
  },
  {
    title: 'TOEIC 필수 훈련 문장 - part3',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 3,
    accuracyScore: 40,
  },
  {
    title: 'TOEIC 필수 훈련 문장 - part2',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 2.5,
    accuracyScore: 80,
  },
  {
    title: 'TOEIC 필수 훈련 문장 - part1',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 3.5,
    accuracyScore: 80,
  },
  {
    title: 'TOEIC 필수 훈련 문장 - part3',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 3.5,
    accuracyScore: 80,
  },
  {
    title: 'TOEIC 필수 훈련 문장 - part3',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 3.5,
    accuracyScore: 80,
  },
  {
    title: 'TOEIC 필수 훈련 문장 - part2',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 3.5,
    accuracyScore: 80,
  },
  {
    title: 'TOEIC 필수 훈련 문장 - part1',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 3.5,
    accuracyScore: 80,
  },
  {
    title: 'TOEIC 필수 훈련 문장 - part3',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 3.5,
    accuracyScore: 80,
  },
  {
    title: 'TOEIC 필수 훈련 문장 - part3',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 3.5,
    accuracyScore: 80,
  },
  {
    title: 'TOEIC 필수 훈련 문장 - part2',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 3.5,
    accuracyScore: 80,
  },
  {
    title: 'TOEIC 필수 훈련 문장 - part1',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 3.5,
    accuracyScore: 80,
  },
  {
    title: 'TOEIC 필수 훈련 문장 - part3',
    finishDate: '2023. 10. 19.',
    pronunciationScore: 3.5,
    accuracyScore: 80,
  },
];

function StudyList() {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className='w-full h-full flex justify-center'>
      <div className='h-full flex flex-col' style={{ width: '98%', marginRight: '5%' }}>
        <div className='tabs h-12'>
          <div className={`tab tab-bordered tab-lg w ${activeTab === 1 ? 'tab-active' : ''}`} onClick={() => setActiveTab(1)}>
            Speek
          </div>
          <div className={`tab tab-bordered tab-lg ${activeTab === 2 ? 'tab-active' : ''}`} onClick={() => setActiveTab(2)}>
            Read
          </div>
          <div className={`tab tab-bordered tab-lg ${activeTab === 3 ? 'tab-active' : ''}`} onClick={() => setActiveTab(3)}>
            Listening
          </div>
        </div>
        <div className='flex flex-col overflow-auto no-scrollbar gap-2'>
          {SpeakingDummyData.map((item, idx) => (
            <SpeakingStudyItem key={idx} props={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudyList;
