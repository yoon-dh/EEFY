'use client';
import TopNav from '@/components/Class/ClassLayout/TopNav';
import SideNav from '@/components/Class/ClassLayout/SideNav';
import Footer from '@/components/Class/ClassLayout/Footer';
import Image from 'next/image';

import { useRecoilValue } from 'recoil';
import { Theme } from '@/recoil/Theme';
import BackgroundComponent from '@/components/Common/BackgroundComponent';

export default function ClassLayout({ children }: { children: React.ReactNode }) {
  const theme = useRecoilValue(Theme);

  // const mainStyle = {
  //   display: 'grid',
  //   gridTemplateColumns: 'repeat(15, 1fr)',
  //   gridTemplateRows: 'repeat(10, 1fr)',
  //   gridTemplateAreas:
  //     "'a a b b b b b b b b b b b b b' 'a a b b b b b b b b b b b b b' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'e e e e e e e e e e e e e e e' ",
  // };
  const mainStyle = {
    // backgound: 'transparent',
    // zIndex: '999',
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gridTemplateRows: 'repeat(10, 1fr)',
    gridTemplateAreas:
      "'a b b b b b b b' 'a b b b b b b b' 'c d d d d d d d' 'c d d d d d d d' 'c d d d d d d d' 'c d d d d d d d' 'c d d d d d d d' 'c d d d d d d d' 'c d d d d d d d' 'e e e e e e e e' ",
  };

  return (
    <>
      <div className='w-full h-full bg-transparent' style={mainStyle} data-theme={theme}>
        <div style={{ gridArea: 'a', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ margin: 'auto', filter: 'drop-shadow(3px 3px 3px #808080)' }} src={`/logo.png`} alt={''} width={130} height={130} />
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

        {/* background */}
      </div>
      <BackgroundComponent />
    </>
  );
}
