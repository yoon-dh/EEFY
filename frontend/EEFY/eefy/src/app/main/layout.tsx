'use client';

import TopNav from '@/components/Main/MainLayout/TopNav';
import SideNav from '@/components/Main/MainLayout/SideNav';
import Footer from '@/components/Main/MainLayout/Footer';

import { useRecoilValue } from 'recoil';
import { Theme } from '@/recoil/Theme';

import Modal from 'react-modal';
import Image from 'next/image';

import BackgroundComponent from '@/components/Common/BackgroundComponent';
import { useEffect } from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const theme = useRecoilValue(Theme);

  const mainStyle = {
    background: 'rgba(255, 255, 255, 0)',
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gridTemplateRows: 'repeat(10, 1fr)',
    gridTemplateAreas:
      "'a b b b b b b b' 'a b b b b b b b' 'c d d d d d d d' 'c d d d d d d d' 'c d d d d d d d' 'c d d d d d d d' 'c d d d d d d d' 'c d d d d d d d' 'c d d d d d d d' 'e e e e e e e e' ",
  };

  return (
    <>
      <div className='w-full h-full' style={mainStyle} data-theme={theme} id='root'>
        <div style={{ gridArea: 'a', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ margin: 'auto', filter: 'drop-shadow(3px 3px 3px #808080)' }} src={`/logo.png`} width={130} height={130} alt='' />
        </div>
        <div style={{ gridArea: 'b' }}>
          <TopNav />
        </div>
        <div style={{ gridArea: 'c' }}>
          <SideNav />
        </div>
        <div style={{ gridArea: 'd', width: '97%' }}>{children}</div>
        <div style={{ gridArea: 'e' }}>
          <Footer />
        </div>
      </div>
      <BackgroundComponent />
    </>
  );
}
