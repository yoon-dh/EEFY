'use client';
import ContainerBtn from '@/components/Notice/ContainerBtn';
import NoticeListBoard from '@/components/Notice/NoticeList/NoticeListBoard';
import NoticeDetail from '@/components/Notice/NoticeDetail/NoticeDetail';

function Home() {
  return (
    <div className='w-full h-full rounded-lg bg-base-200' style={{ width: '100%', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
      <div
        style={{
          padding: '0.3% 0px 0px 0px',
        }}
      >
        <ContainerBtn />
      </div>
      <div className='flex' style={{ height: '100%' }}>
        <NoticeListBoard />
        <NoticeDetail />
      </div>
    </div>
  );
}

export default Home;
