import { CreateBtn, NoticeTitle, Tab } from './ContainerBtn.style';
import { useRouter, useParams } from 'next/navigation';

function ContainerBtn() {
  const router = useRouter()
  const params = useParams()
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
        <CreateBtn onClick={() => 
      router.push(`/class/${params.classId}/lecture/create`)
      }>
          자료 생성
        </CreateBtn>
    </div>
  );
}
export default ContainerBtn;
