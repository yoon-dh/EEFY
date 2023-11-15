import { CreateBtn, NoticeTitle, Tab } from './ContainerBtn.style';

function ContainerBtn() {
  return (
    <div className='flex mt-1'>
      <div>
        <div className="tabs" style={{
          margin:'0px 0px 0px 10px',
        }}>
          <Tab className="tab tab-bordered tab-active">
            <NoticeTitle>
              학습자료
            </NoticeTitle>
          </Tab> 
        </div>
      </div>
    </div>
  );
}
export default ContainerBtn;
