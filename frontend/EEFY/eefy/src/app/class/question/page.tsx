'use client';
import ContainerBtn from "@/components/Question/ContainerBtn";
import Note from "@/components/Notice/Note/Note";
function Home() {
  return (
    <div className='w-full h-full'>
      <div>
        <ContainerBtn />
      </div>
      <div style={{
        position:'relative',
        top:'10px',
        height:'89%', 
      }}>
        <Note/>
      </div>
      {/* <div className='flex  rounded-lg bg-base-200' 
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
            // borderLeft: '2px solid black'
          }}>
            <div style={{
              flex:6,
              backgroundColor:'white'
            }}>
              <QuestionDetail/>
            </div>
            <div style={{
              flex:4,
              padding:'15px 20px'
            }}>
              <CommentList/>
            </div>
          </div>
      </div> */}
    </div>
  );
}

export default Home;
