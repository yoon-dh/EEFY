// import TopNav from '@/components/MainLayout/TopNav';
// import SideNav from '@/components/MainLayout/SideNav';
// import Footer from '@/components/MainLayout/Footer';

// export default function MainLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div>
//       {/* Container */}
//       <div className='flex flex-col w-screen h-screen'>
//         {/* head banner */}
//         <div className='flex-auto h-2/5'>
//           <TopNav />
//         </div>

//         {/* middle content */}
//         <div className='flex flex-auto w-full h-full '>
//           <div className='flex-auto w-32 '>
//             <SideNav />
//           </div>
//           <div className='flex flex-auto w-full justify-start items-center'>{children}</div>
//         </div>

//         {/* Footer */}
//         <div className='flex-auto h-20 '>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import TopNav from '@/components/Main/MainLayout/TopNav';
import SideNav from '@/components/Main/MainLayout/SideNav';
import Footer from '@/components/Class/ClassLayout/Footer';

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
        <img style={{ margin: 'auto', filter: 'drop-shadow(3px 3px 3px #808080)' }} src={`/logo.png`} width = {130} height={130} />
      </div>
      <div style={{ gridArea: 'b' }}>
        <TopNav />
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
