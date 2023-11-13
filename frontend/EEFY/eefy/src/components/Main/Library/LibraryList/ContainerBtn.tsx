'use client';
import { useState } from 'react';
import Link from 'next/link';

import SearchIcon from '@mui/icons-material/Search';
import { Title, Tab, SearchInput } from './LibraryList.style';

interface ContainerBtnType {
  role: string;
  activeTab: number;
}

function ContainerBtn({ role, activeTab }: ContainerBtnType) {
  const [search, setSearch] = useState<string>('');

  return (
    <div className='w-full h-full flex items-center'>
      <div className='tabs' style={{ flex: 8 }}>
        <Link href={`/main/library/${role}`}>
          <Tab className={`tab tab-bordered ${activeTab === 1 ? 'tab-active' : ''}`}>
            <Title>All</Title>
          </Tab>
        </Link>
        <Link href={`/main/library/${role}/speaking`}>
          <Tab className={`tab tab-bordered ${activeTab === 2 ? 'tab-active' : ''}`}>
            <Title>Speak</Title>
          </Tab>
        </Link>
        <Link href={`/main/library/${role}/reading`}>
          <Tab className={`tab tab-bordered ${activeTab === 3 ? 'tab-active' : ''}`}>
            <Title>Read</Title>
          </Tab>
        </Link>
        <Link href={`/main/library/${role}/listening`}>
          <Tab className={`tab tab-bordered ${activeTab === 4 ? 'tab-active' : ''}`}>
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
