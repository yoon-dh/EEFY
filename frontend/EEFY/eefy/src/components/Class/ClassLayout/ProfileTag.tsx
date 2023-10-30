import Image from 'next/image';

function ProfileTag() {
  const dummyData = {
    profile: '/logo.png',
    name: 'Hart Hagerty',
    age: '3rd',
  };
  return (
    <>
      <div className='avatar'>
        <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
          <Image src={dummyData.profile} alt='Avatar Tailwind CSS Component' width={250} height={250} />
        </div>
      </div>
      <div className='flex flex-col'>
        <div>{dummyData.name}</div>
        <div>{dummyData.age}</div>
      </div>
    </>
  );
}

export default ProfileTag;
