import { useState } from 'react';
import { NoticeTitle, Tab } from './ContainerBtn.style';
import { useRecoilState } from 'recoil';
import {QuestionWaitStatus} from '@/recoil/Question'

function ContainerBtn() {
  const [waitStatus, setWaitStatus] = useRecoilState(QuestionWaitStatus)

  return (
    <div className='flex mt-1'>
      <div>
        <div className="tabs">
          <Tab className={`tab tab-bordered ${waitStatus === false ? 'tab-active' : ''}`}
          onClick={() => setWaitStatus(false)}
          >
            <NoticeTitle>
              답변 대기
            </NoticeTitle>
          </Tab> 
          <Tab className={`tab tab-bordered ${waitStatus === true ? 'tab-active' : ''}`}
          onClick={() => setWaitStatus(true)}
          >
            <NoticeTitle>
              답변 완료
            </NoticeTitle>
          </Tab> 
        </div>
      </div>
    </div>
  );
}
export default ContainerBtn;
