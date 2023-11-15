import { CreateBtn, NoticeTitle, Tab, TabBox } from './ContainerBtn.style';
import { useRouter, useParams } from 'next/navigation';

function ContainerBtn() {
  const router = useRouter()
  const params = useParams()

  return (
    <div className='flex mt-1'>
      <TabBox>
        <div className='tabs'>
          <Tab className='tab tab-bordered tab-active'>
            <NoticeTitle>공지사항</NoticeTitle>
          </Tab>
        </div>
      </TabBox>

      <CreateBtn className='text-xl bg-info text-white' 
      onClick={() => 
      router.push(`/class/${params.classId}/notice/create`)
      }>
        CREATE
      </CreateBtn>
    </div>
  );
}
export default ContainerBtn;
