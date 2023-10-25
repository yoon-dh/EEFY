import TopNav from '@/components/MainLayout/TopNav';
import SideNav from '@/components/MainLayout/SideNav';
import Footer from '@/components/MainLayout/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Container */}
      <div className='flex flex-col w-screen h-screen'>
        {/* head banner */}
        <div className='flex-auto h-2/5'>
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
