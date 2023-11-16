'use client';
import { HomeworkCategoryAtom } from '@/recoil/Library/CreateHomework/CreateHomework';
import { useRecoilState } from 'recoil';

function RadioBtn() {
  const [selectedOption, setSelectedOption] = useRecoilState(HomeworkCategoryAtom);

  return (
    <div className='h-full flex items-center gap-10'>
      <div>
        <label className='label cursor-pointer flex gap-4'>
          <input
            type='radio'
            name='radio-work-info'
            className='radio '
            checked={selectedOption === 'SPEAKING'}
            onChange={() => setSelectedOption('SPEAKING')}
          />
          <span className='label-text'>Speaking</span>
        </label>
      </div>
      <div>
        <label className='label cursor-pointer flex gap-4'>
          <input type='radio' name='radio-work-info' className='radio ' checked={selectedOption === 'READING'} onChange={() => setSelectedOption('READING')} />
          <span className='label-text'>Reading</span>
        </label>
      </div>
      <div>
        <label className='label cursor-pointer flex gap-4'>
          <input
            type='radio'
            name='radio-work-info'
            className='radio '
            checked={selectedOption === 'LISTENING'}
            onChange={() => setSelectedOption('LISTENING')}
          />
          <span className='label-text'>Listening</span>
        </label>
      </div>
    </div>
  );
}

export default RadioBtn;
