import { useState } from 'react';
import { NoticeTitle, Tab } from './ContainerBtn.style';
function ContainerBtn() {
  const [activeTab, setActiveTab] = useState<boolean>(true);

  return (
    <div className='flex mt-1'>
      <div>
        <div className="tabs" style={{
          margin:'0px 0px 0px 10px'
        }}>
          <Tab className={`tab tab-bordered ${activeTab === true ? 'tab-active' : ''}`}
          onClick={() => setActiveTab(true)}
          >
            <NoticeTitle>
              답변 대기
            </NoticeTitle>
          </Tab> 
          <Tab className={`tab tab-bordered ${activeTab === false ? 'tab-active' : ''}`}
          onClick={() => setActiveTab(false)}
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
