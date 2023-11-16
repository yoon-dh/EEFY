'use client';
import { useState } from 'react';
import Link from 'next/link';

import SearchIcon from '@mui/icons-material/Search';
import { Title, Tab, SearchInput } from './StudyList.style';

interface ContainerBtnType {
  classId: number;
  activeTab: string;
}

function ContainerBtn({ classId, activeTab }: ContainerBtnType) {
  const [search, setSearch] = useState<string>('');

  return (
    <div className='w-full h-full flex items-center'>
      <div className='tabs' style={{ flex: 8 }}>
        <Link href={`/class/${classId}/studylist/speaking`}>
          <Tab className={`tab tab-bordered ${activeTab === 'SPEAKING' ? 'tab-active' : ''}`}>
            <Title>Speak</Title>
          </Tab>
        </Link>
        <Link href={`/class/${classId}/studylist/reading`}>
          <Tab className={`tab tab-bordered ${activeTab === 'READING' ? 'tab-active' : ''}`}>
            <Title>Read</Title>
          </Tab>
        </Link>
        <Link href={`/class/${classId}/studylist/listening`}>
          <Tab className={`tab tab-bordered ${activeTab === 'LISTENING' ? 'tab-active' : ''}`}>
            <Title>Listening</Title>
          </Tab>
        </Link>
      </div>

      <div className='relative' style={{ flex: 1 }}>
        <SearchInput
          className='boxShadow'
          type='text'
          placeholder='Search'
          style={{
            width: '250px',
            height: '40px',
            padding: '10px 20px',
            borderRadius: '30px',
            border: 'none',
            outline: 'none',
          }}
          value={search}
          name='search'
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
        {!search && (
          <div className='absolute' style={{ top: '10%', right: '5%' }}>
            <SearchIcon style={{ fontSize: '30px', color: '#c5c5c5' }} />
          </div>
        )}
      </div>
    </div>
  );
}
export default ContainerBtn;
