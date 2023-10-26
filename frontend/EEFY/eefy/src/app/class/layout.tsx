import TopNav from '@/components/Class/ClassLayout/TopNav';
import SideNav from '@/components/Class/ClassLayout/SideNav';
import Footer from '@/components/Class/ClassLayout/Footer';

export default function ClassLayout({ children }: { children: React.ReactNode }) {
  const mainStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(15, 1fr)',
    gridTemplateRows: 'repeat(10, 1fr)',
    gridTemplateAreas:
      "'a a b b b b b b b b b b b b b' 'a a b b b b b b b b b b b b b' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'c c d d d d d d d d d d d d d' 'e e e e e e e e e e e e e e e' ",
  };

  return (
    <div className='w-full h-full' style={mainStyle}>
      <div style={{ gridArea: 'a', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img style={{ margin: 'auto', filter: 'drop-shadow(3px 3px 3px #808080)' }} src={`/logo.png`} />
      </div>
      <div style={{ gridArea: 'b' }}>
        <TopNav />
      </div>
      <div style={{ gridArea: 'c' }}>
        <SideNav />
      </div>
      <div className='bg-warning' style={{ gridArea: 'd', width: '98%' }}>
        {children}
      </div>
      <div style={{ gridArea: 'e' }}>
        <Footer />
      </div>
    </div>
  );
}
// export default function ClassLayout({ children }: { children: React.ReactNode }) {
//   return <div className='w-full h-full'>{children}</div>;
// }
