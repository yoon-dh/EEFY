'use client';
import { useState } from 'react';
import BarChart from './BarChart';
import * as S from '../../../styles/MainStyle.style';
import AverageAndMyScore from '@/components/Class/Dashboard/AverageAndMyScore';

function TabsComponents() {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className='w-full h-full' style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: '1' }} className='tabs'>
        <div className={`tab tab-bordered tab-lg w ${activeTab === 1 ? 'tab-active' : ''}`} onClick={() => setActiveTab(1)}>
          Speak
        </div>
        <div className={`tab tab-bordered tab-lg ${activeTab === 2 ? 'tab-active' : ''}`} onClick={() => setActiveTab(2)}>
          Read
        </div>
        <div className={`tab tab-bordered tab-lg ${activeTab === 3 ? 'tab-active' : ''}`} onClick={() => setActiveTab(3)}>
          Listening
        </div>
      </div>
      {/* <BarChart activeData={activeTab} /> */}
      <div style={{ flex: '0.5' }}></div>
      <S.MainContainer className='h-full' style={{ flex: '8.5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <AverageAndMyScore />
      </S.MainContainer>
    </div>
  );
}

export default TabsComponents;
