import { CreateBtn, NoticeTitle, Tab, TabBox } from './ContainerBtn.style';

function ContainerBtn() {
  return (
    <div className='flex mt-1'>
      <TabBox>
        <div className='tabs'>
          <Tab className='tab tab-bordered tab-active'>
            <NoticeTitle>공지사항</NoticeTitle>
          </Tab>
        </div>
      </TabBox>
    </div>
  );
}
export default ContainerBtn;
