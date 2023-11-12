'use client';
import ContainerBtn from '@/components/Notice/ContainerBtn';
import Note from '@/components/Notice/Note/Note';
function Home() {
  return (
    <div className='w-full h-full'>
      <div>
        <ContainerBtn />
      </div>
      <div className='w-full' 
      style={{
        position:'relative',
        top:'10px',
        height:'89%', 
        }}>
        <Note/>
      </div>
    </div>
  );
}

export default Home;
