import { CreateBtn, NoticeTitle, Tab } from './ContainerBtn.style';
function ContainerBtn() {
  return (
    <div className='flex mt-1'>
      <div>
        <div className="tabs" style={{
          margin:'0px 0px 0px 10px'
        }}>
          <Tab className="tab tab-bordered tab-active">
            <NoticeTitle>
              공지사항
            </NoticeTitle>
          </Tab> 
        </div>
      </div>

      <CreateBtn>글 작성</CreateBtn>
    </div>
  );
}
export default ContainerBtn;
