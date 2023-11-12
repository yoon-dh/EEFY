import { CreateBtn, NoticeTitle, Tab } from './ContainerBtn.style';
import { useRecoilState } from 'recoil';
import {LecturePage} from '@/recoil/Lecture'
function ContainerBtn() {
  const [lecturePage, setLecturePage] = useRecoilState(LecturePage)
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
        <CreateBtn onClick={()=>setLecturePage('create')}>
          자료 생성
        </CreateBtn>
    </div>
  );
}
export default ContainerBtn;
