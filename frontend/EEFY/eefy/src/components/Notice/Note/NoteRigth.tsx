import NoticeDetail from '../NoticeDetail/NoticeDetail';
import CommentList from '@/components/Question/Comment/CommentList';
import LectureDetail from '@/components/Lecture/LectureDetail/LectureDetail';
import QuestionDetail from '@/components/Question/QuestionDetail/QuestionDetail';
import { useRecoilValue } from 'recoil';
import { NoticeNum } from '@/recoil/Notice'
import { Name } from '@/recoil/Notice';
import NoneBox from './NoneBox';
function NoteRigth() {
  const data = useRecoilValue(NoticeNum)
  const lastWord = useRecoilValue(Name)

  return (
    <div
      className='w-full h-full bg-base-200'
      style={{
        borderBottomRightRadius: '20px',
        borderTopRightRadius: '20px',
        boxShadow: '4px 4px 4px rgba(70, 70, 70, 0.25)',
      }}
    >
      {!data ? (
        <>
          <NoneBox/>
        </>
      ) : (
        <>
          <div
            className='w-full h-full'
            style={{
              padding: '27px 0px 22px 30px',
            }}
          >
            {lastWord === 'notice' && (
              <>
                <NoticeDetail />  
              </>
            )}
            {lastWord === 'question' && (
              <>
              <div style={{
                  flex:8,
                  display:'flex',
                  height: '100%',  
                  width: '97%', 
                  backgroundColor:'white',
                  borderRadius:'20px',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                  // borderLeft: '2px solid black'
                }}>
                  <div style={{
                    flex:6,
                  }}>
                    <QuestionDetail/>
                  </div>
                  <div style={{
                    flex:4,
                    padding:'15px 20px',
                    backgroundColor:'#F2F3F7',
                    borderRadius:'0px 20px 20px 0px',
                    // boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.25)'
                  }}>
                    <CommentList/>
                  </div>
                </div>
              </>
            )}
            {lastWord === 'lecture' && (
              <>
              <div style={{
                  flex:8,
                  display:'flex',
                  height: '100%',  
                  width: '97%', 
                  backgroundColor:'white',
                  borderRadius:'20px',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                  // borderLeft: '2px solid black'
                }}>
                  <div style={{
                    flex:6,
                  }}>
                    <LectureDetail/>
                  </div>
                  <div style={{
                    flex:4,
                    padding:'15px 20px',
                    backgroundColor:'#F2F3F7',
                    borderRadius:'0px 20px 20px 0px',
                    // boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.25)'
                  }}>
                    <CommentList/>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default NoteRigth;

