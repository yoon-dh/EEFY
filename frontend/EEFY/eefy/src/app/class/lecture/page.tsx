'use client';
import ContainerBtn from '@/components/Lecture/ContainerBtn';
import NoticeListBoard from "@/components/Notice/NoticeList/NoticeListBoard";
import CommentList from "@/components/Question/Comment/CommentList";
import LectureDetail from "@/components/Lecture/LectureDetail/LectureDetail";
function Home() {
  return (
    <div className='w-full h-full'>
      <div>
        <ContainerBtn />
      </div>
      <div className='flex  rounded-lg bg-base-200' 
      style={{ 
        height: '90%',  
        width: '100%', 
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        margin:'10px 0px 0px 0px',
        }}>
          <NoticeListBoard/>
          <div style={{
            flex:8,
            display:'flex',
          }}>
            <div style={{
              flex:5,
              backgroundColor:'white'
            }}>
              <LectureDetail/>
            </div>
            <div style={{
              flex:5,
              padding:'15px 20px'
            }}>
              <CommentList/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
