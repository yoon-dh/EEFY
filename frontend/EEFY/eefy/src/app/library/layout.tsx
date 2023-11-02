'use client';

import TopNav from '@/components/Library/TopNav';
import SideNav from '@/components/Main/MainLayout/SideNav';
import Footer from '@/components/Class/ClassLayout/Footer';
import Image from "next/image";
import { useRecoilValue } from 'recoil';
import { Thema } from '@/recoil/Thema';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const thema = useRecoilValue(Thema);

  const mainStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(15, 1fr)',
    gridTemplateRows: 'repeat(10, 1fr)',
    gridTemplateAreas:
      "'a a b b b b b b b b b b b b b' 'a a b b b b b b b b b b b b b' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'e e e e e e e e e e e e e e e' ",
  };

  return (
    <div className='w-full h-full' style={mainStyle} data-theme={thema}>
      <div style={{ gridArea: 'a', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ margin: 'auto', filter: 'drop-shadow(3px 3px 3px #808080)' }} src={`/logo.png`} alt={''}/>
      </div>
      <div style={{ gridArea: 'b' }}>
        <TopNav/>
      </div>
      <div style={{ gridArea: 'c' }}>
        <SideNav />
      </div>
      <div style={{ gridArea: 'd', width: '98%' }}>{children}</div>
      <div style={{ gridArea: 'e' }}>
        <Footer />
      </div>
    </div>
  );
}
