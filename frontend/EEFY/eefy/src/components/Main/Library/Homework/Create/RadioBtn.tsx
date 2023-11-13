'use client';
import { HomeworkCategoryAtom } from '@/recoil/Library/CreateHomework/CreateHomework';
import { useRecoilState } from 'recoil';

function RadioBtn() {
  const [selectedOption, setSelectedOption] = useRecoilState(HomeworkCategoryAtom);

  return (
    <div className='h-full flex items-center gap-10'>
      <div>
        <label className='label cursor-pointer flex gap-4'>
          <input type='radio' name='radio-work-info' className='radio ' checked={selectedOption === 'speak'} onChange={() => setSelectedOption('speak')} />
          <span className='label-text'>Speak</span>
        </label>
      </div>
      <div>
        <label className='label cursor-pointer flex gap-4'>
          <input type='radio' name='radio-work-info' className='radio ' checked={selectedOption === 'read'} onChange={() => setSelectedOption('read')} />
          <span className='label-text'>Read</span>
        </label>
      </div>
      <div>
        <label className='label cursor-pointer flex gap-4'>
          <input
            type='radio'
            name='radio-work-info'
            className='radio '
            checked={selectedOption === 'listening'}
            onChange={() => setSelectedOption('listening')}
          />
          <span className='label-text'>Listening</span>
        </label>
      </div>
    </div>
  );
}

export default RadioBtn;
