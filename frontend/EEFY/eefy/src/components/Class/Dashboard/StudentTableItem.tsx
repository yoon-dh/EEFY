'use client';

import Image from 'next/image';
import { targetPush } from '@/api/Push/test';
import { useParams } from 'node_modules/next/navigation';

interface StudentTableItemProps {
  memberId: number;
  profile: string;
  name: string;
  email: string;
  phone: string;
}

function StudentTableItem({ memberId, profile, name, email, phone }: StudentTableItemProps) {
  let profileCheck = profile;
  if (profile === null) {
    profileCheck = '/icon-192x192.png';
  }

  const CLASS_ID = useParams();

  const pushTrargetData = {
    targetMemberId: memberId,
    classId: Number(CLASS_ID.classId),
    link: 'test',
    className: 'test',
    title: `${name}님`,
    content: `과제 풀이하세요`,
  };

  return (
    <tr style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <th style={{ flex: '0.5' }}>
        <label>
          <input type='checkbox' className='checkbox' />
        </label>
      </th>
      <td style={{ flex: '3' }}>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            <div className='mask mask-squircle w-12 h-12 bg-primary'>
              <Image src={profileCheck} alt='Avatar Tailwind CSS Component' width={250} height={250} />
            </div>
          </div>
          <div>
            <div className='font-bold'>{name}</div>
            <div className='text-sm opacity-50'>student</div>
          </div>
        </div>
      </td>
      <td style={{ flex: '2.5' }}>{email}</td>
      <td style={{ flex: '2.5' }}>{phone}</td>
      <th style={{ flex: '1.5' }}>
        <button onClick={() => targetPush(pushTrargetData)} className='btn btn-ghost btn-xs'>
          details
        </button>
      </th>
    </tr>
  );
}

export default StudentTableItem;
