import Link from 'next/link';

function Main() {
  return (
    <div>
      <div className='w-full h-full bg-green-400'>메인</div>
      <Link href='/class'>클래스</Link>
    </div>
  );
}

export default Main;
