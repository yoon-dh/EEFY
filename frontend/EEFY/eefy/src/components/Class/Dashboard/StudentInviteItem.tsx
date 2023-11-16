'use client';

import Image from 'next/image';
import { IoIosCloseCircle } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import { inviteArray, inviteMemberIdArray } from '@/recoil/TeacherClass';

interface StudentInviteItemProps {
  memberId: number;
  profile: string;
  name: string;
}

function StudentInviteItem({ memberId, profile, name }: StudentInviteItemProps) {
  const [inviteArr, setInviteArr] = useRecoilState(inviteArray);
  const [inviteMemberIdArr, setInviteMemberIdArr] = useRecoilState(inviteMemberIdArray);

  function handleInvite() {
    const existingIndex = inviteArr.findIndex(item => item.memberId === memberId);

    if (existingIndex !== -1) {
      const updatedInviteArr = [...inviteArr];
      updatedInviteArr.splice(existingIndex, 1);
      setInviteArr(updatedInviteArr);

      const updatedInviteMemberIdArr = inviteMemberIdArr.filter(id => id !== memberId);
      setInviteMemberIdArr(updatedInviteMemberIdArr);
    }
  }

  return (
    <div className='flex space-x-3 flex-col' style={{ position: 'relative' }}>
      <div className='avatar flex justify-center items-center'>
        <div className='text-3xl' style={{ position: 'absolute', top: '-7px', right: '-7px', zIndex: '5' }} onClick={handleInvite}>
          <IoIosCloseCircle />
        </div>

        <div className='mask mask-squircle w-12 h-12 bg-primary'>
          <Image src='/logo.png' alt='Avatar Tailwind CSS Component' width={250} height={250} />
        </div>
      </div>
      <div className='flex justify-center items-center' style={{ margin: '0' }}>
        <div className='font-bold mt-1'>{name}</div>
      </div>
    </div>
  );
}

export default StudentInviteItem;
