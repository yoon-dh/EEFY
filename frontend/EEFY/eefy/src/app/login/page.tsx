import Link from 'next/link';

function Login() {
  return (
    <div>
      <div className='w-full h-full bg-red-200'>로그인</div>
      <Link href='/main'>메인</Link>
    </div>
  );
}

export default Login;
