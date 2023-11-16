import CreateHomeworkComponent from '@/components/Main/Library/Homework/Create/CreateHomeworkComponent';

function CreateHomework() {
  return (
    <>
      <div className='w-full h-full flex flex-col'>
        <div className='flex justify-between items-center' style={{ flex: 1 }}>
          <div className='text-2xl font-bold' style={{ letterSpacing: '2px' }}>
            HOMEWORK 생성
          </div>
          <div className='text-2xl font-bold'>?</div>
        </div>
        <div style={{ flex: 9 }}>
          <CreateHomeworkComponent />
        </div>
      </div>
    </>
  );
}

export default CreateHomework;
