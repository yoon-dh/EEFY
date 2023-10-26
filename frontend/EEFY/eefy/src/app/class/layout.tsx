import TopNav from '@/components/ClassLayout/TopNav';
import SideNav from '@/components/ClassLayout/SideNav';
import Footer from '@/components/ClassLayout/Footer';

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
        <img style={{ margin: 'auto' }} src={`/logo.png`} />
      </div>
      <div style={{ gridArea: 'b' }}>
        <TopNav />
      </div>
      <div style={{ gridArea: 'c' }}>
        <SideNav />
      </div>
      <div style={{ gridArea: 'd', width: '98%' }}>
        {children}
      </div>
      <div style={{ gridArea: 'e' }}>
        <Footer />
      </div>
    </div>
  );
}
