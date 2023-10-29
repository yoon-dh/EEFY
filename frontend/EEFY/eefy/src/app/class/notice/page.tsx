'use client';
import ContainerBtn from '@/components/Notice/ContainerBtn';
import NoticeListBoard from '@/components/Notice/NoticeList/NoticeListBoard';
import NoticeDetail from '@/components/Notice/NoticeDetail/NoticeDetail';

function Home() {
  return (
    <div className='w-full h-full'>
      <div>
        <ContainerBtn />
      </div>
      <div className='flex  rounded-lg bg-base-200' 
      style={{ 
        height: '90%',  
        width: '100%', 
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        margin:'10px 0px 0px 0px'
        }}>
        <NoticeListBoard />
        <NoticeDetail />
      </div>
    </div>
  );
}

export default Home;
