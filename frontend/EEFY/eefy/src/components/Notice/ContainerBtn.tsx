import { CreateBtn, NoticeTitle, Tab, TabBox } from './ContainerBtn.style';
import { useRecoilState } from 'recoil';
import { NoticePage } from '@/recoil/Notice';
function ContainerBtn() {
  const [noticePageUrl, setNoticePageUrl] = useRecoilState(NoticePage)
  
  return (
    <div className='flex mt-1'>
      <TabBox>
        <div className="tabs">
          <Tab className="tab tab-bordered tab-active">
            <NoticeTitle>
              공지사항
            </NoticeTitle>
          </Tab> 
        </div>
      </TabBox>

      <CreateBtn onClick={()=>setNoticePageUrl('create')}>글 작성</CreateBtn>
    </div>
  );
}
export default ContainerBtn;
