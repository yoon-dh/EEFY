'use client';
import { useState } from 'react';
import { Title, Tab, SearchInput } from './LibraryList.style';
import SearchIcon from '@mui/icons-material/Search';

function ContainerBtn() {
  const [activeTab, setActiveTab] = useState<Number>(1);
  const [search, setSearch] = useState<string>('');

  return (
    <div className='w-full h-full flex items-center'>
      <div className='tabs' style={{ flex: 8 }}>
        <Tab className={`tab tab-bordered ${activeTab === 1 ? 'tab-active' : ''}`} onClick={() => setActiveTab(1)}>
          <Title>Read</Title>
        </Tab>
        <Tab className={`tab tab-bordered ${activeTab === 2 ? 'tab-active' : ''}`} onClick={() => setActiveTab(2)}>
          <Title>Speak</Title>
        </Tab>
        <Tab className={`tab tab-bordered ${activeTab === 3 ? 'tab-active' : ''}`} onClick={() => setActiveTab(3)}>
          <Title>Listening</Title>
        </Tab>
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
