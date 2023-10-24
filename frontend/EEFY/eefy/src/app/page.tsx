import Image from 'next/image';
import SignUp from '@/components/SignUp/SignUp';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='w-full h-full'>
      <SignUp />
      <Link href='/login'>로그인</Link>
    </div>
  );
}
