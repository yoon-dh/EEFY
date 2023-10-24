import TopNav from '@/components/ClassLayout/TopNav';
import SideNav from '@/components/ClassLayout/SideNav';
import Footer from '@/components/ClassLayout/Footer';

export default function ClassLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Container */}
      <div className='flex flex-col w-screen h-screen'>
        {/* head banner */}
        <div className='flex-auto h-1/4'>
          <TopNav />
        </div>

        {/* middle content */}
        <div className='flex flex-auto w-full h-full '>
          <div className='flex-auto w-32 '>
            <SideNav />
          </div>
          <div className='flex flex-auto w-full justify-start items-center'>{children}</div>
        </div>

        {/* Footer */}
        <div className='flex-auto h-20 '>
          <Footer />
        </div>
      </div>
    </div>
  );
}
// export default function ClassLayout({ children }: { children: React.ReactNode }) {
//   return <div className='w-full h-full'>{children}</div>;
// }
