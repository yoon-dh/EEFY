'use client';

import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { inviteArray, inviteMemberIdArray } from '@/recoil/TeacherClass';
import { useState } from 'react';

interface StudentSearchItemProps {
  memberId: number;
  profile: string;
  name: string;
  email: string;
  phone: string;
}

function StudentSearchItem({ memberId, profile, name, email, phone }: StudentSearchItemProps) {
  const [inviteArr, setInviteArr] = useRecoilState(inviteArray);
  const [inviteMemberIdArr, setInviteMemberIdArr] = useRecoilState(inviteMemberIdArray);

  let checkstate;

  function isChecked() {
    for (let i = 0; i < inviteMemberIdArr.length; i++) {
      if (memberId === inviteMemberIdArr[i]) {
        checkstate = true;
        return;
      }
    }
    checkstate = false;
    return;
  }

  isChecked();

  function handleInvite() {
    const existingIndex = inviteArr.findIndex(item => item.memberId === memberId);

    if (existingIndex !== -1) {
      const updatedInviteArr = [...inviteArr];
      updatedInviteArr.splice(existingIndex, 1);
      setInviteArr(updatedInviteArr);

      const updatedInviteMemberIdArr = inviteMemberIdArr.filter(id => id !== memberId);
      setInviteMemberIdArr(updatedInviteMemberIdArr);
    } else {
      const updatedInviteArr = [...inviteArr, { memberId, profile, name }];
      setInviteArr(updatedInviteArr);

      const updatedInviteMemberIdArr = [...inviteMemberIdArr, memberId];
      setInviteMemberIdArr(updatedInviteMemberIdArr);
    }
  }

  return (
    <tr>
      <th>
        <label>
          <input type='checkbox' className='checkbox' checked={checkstate} onClick={handleInvite} readOnly />
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

export default StudentSearchItem;
