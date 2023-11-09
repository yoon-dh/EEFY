'use client';

import Image from 'next/image';

interface StudentTableItemProps {
  profile: string;
  name: string;
  email: string;
  phone: string;
}

function StudentTableItem({ profile, name, email, phone }: StudentTableItemProps) {
  return (
    <tr>
      <th>
        <label>
          <input type='checkbox' className='checkbox' />
        </label>
      </th>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            <div className='mask mask-squircle w-12 h-12 bg-primary'>
              <Image src={profile} alt='Avatar Tailwind CSS Component' width={250} height={250} />
            </div>
          </div>
          <div>
            <div className='font-bold'>{name}</div>
            <div className='text-sm opacity-50'>student</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{phone}</td>
      <th>
        <button className='btn btn-ghost btn-xs'>details</button>
      </th>
    </tr>
  );
}

export default StudentTableItem;
