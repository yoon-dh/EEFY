'use client';

import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { userData } from '@/recoil/Auth';

function ProfileTag() {
  const userDateObj = useRecoilValue(userData);

  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <div className='avatar' style={{ position: 'relative' }}>
        <div className='w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
          {/* <span className='indicator-item badge badge-warning' style={{ position: 'absolute', top: '0px', right: '0px', zIndex: '10' }}></span> */}
          <Image style={{ objectFit: 'cover' }} src='/icon-192x192.png' alt='Avatar Tailwind CSS Component' width={250} height={250} />
        </div>
      </div>
      <div className='flex flex-col'>
        <div style={{ letterSpacing: '2px', color: 'white' }}>{userDateObj?.name}</div>
        <div style={{ color: 'rgba(255, 255, 255, 0.75)', letterSpacing: '2px' }}>{userDateObj?.role}</div>
      </div>
    </div>
  );
}

export default ProfileTag;
