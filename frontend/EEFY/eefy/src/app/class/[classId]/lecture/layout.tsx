'use client';
import ContainerBtn from '@/components/Lecture/ContainerBtn';
import NoteLeft from '@/components/Notice/Note/NoteLeft';
import NoteCenter from '@/components/Notice/Note/NoteCenter';
import styled from 'styled-components';

export default function NoticeLayout({ children }: { children: React.ReactNode }) {
  return(
    <div className='w-full h-full'>
      <div>
        <ContainerBtn/>
      </div>
      <div className='flex w-full h-full rounded-lg' style={{
          position:'relative',
          top:'10px',
          height:'89%', 
        }}>
        <div style={{flex:2}}>
          <NoteLeft/>
        </div>
        <div style={{flex:1}}>
          <NoteCenter/>
        </div>
        <div style={{flex:7}}>
          <NoteRigth className='w-full h-full bg-base-200'>
            {children}
          </NoteRigth>
        </div>
      </div>
    </div>
  )
}

const NoteRigth = styled.div`
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  background-color: rgba(255, 255, 255, 0.06);
  z-index: 0;
  border:1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-left: none;
`