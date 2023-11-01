'use client';
import { useState } from 'react';
import BarChart from './BarChart';

function TabsComponents() {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className='w-full h-full'>
      <div className='tabs'>
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
      {/* <BarChart activeData={activeTab} /> */}
    </div>
  );
}

export default TabsComponents;
