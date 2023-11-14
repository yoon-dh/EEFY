import { useEffect } from 'react';
import NoticeDetail from '../NoticeDetail/NoticeDetail';
import NoticeCreate from '../NoticeCreate/NoticeCreate';
import NoticeUpdata from '../NoticeUpdata/NoticeUpdata';
import CommentList from '@/components/Question/Comment/CommentList';
import LectureDetail from '@/components/Lecture/LectureDetail/LectureDetail';
import LectureCreate from '@/components/Lecture/LectureCreate/LectureCreate';
import QuestionDetail from '@/components/Question/QuestionDetail/QuestionDetail';
import QuestionCreate from '@/components/Question/QuestionCreate/QuestionCreate';
import QuestionUpdata from '@/components/Question/QuestionUpdata/QuestionUpdata';
import { useRecoilValue } from 'recoil';
import { DetailData, NoticePage } from '@/recoil/Notice';
import { LecturePage } from '@/recoil/Lecture';
import { QuestionPage } from '@/recoil/Question';
import { Name } from '@/recoil/Notice';
import NoneBox from './NoneBox';
import styled from 'styled-components';

const Container = styled.div`
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  /* box-shadow: 0px 4px 4px rgba(70, 70, 70, 0.25); */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 'none';
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(0, 0, 0, 0);
`;

function NoteRigth() {
  const data = useRecoilValue(DetailData);
  const lastWord = useRecoilValue(Name);
  const LecturePageUrl = useRecoilValue(LecturePage);
  const NoticePageUrl = useRecoilValue(NoticePage);
  const QuestionPageUrl = useRecoilValue(QuestionPage);

  return (
    <div
      className='w-full h-full bg-base-200'
      style={{
        borderBottomRightRadius: '20px',
        borderTopRightRadius: '20px',
        // boxShadow: '4px 4px 4px rgba(70, 70, 70, 0.25)',
        background: 'rgba(255, 255, 255, 0.06)',
        zIndex: '0',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(10px)',
        borderLeft: 'none',
      }}
    >
      {lastWord === 'notice' && (
        <>
          <div
            className='w-full h-full'
            style={{
              padding: '27px 0px 22px 30px',
            }}
          >
            {NoticePageUrl === 'detail' && (
              <>
                {!data ? (
                  <>
                    <NoneBox />
                  </>
                ) : (
                  <>
                    <NoticeDetail />
                  </>
                )}
              </>
            )}
            {NoticePageUrl === 'create' && (
              <>
                <div
                  style={{
                    flex: 8,
                    display: 'flex',
                    height: '100%',
                    width: '97%',
                    // backgroundColor: 'white',
                    borderRadius: '20px',
                    // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  }}
                >

                  {NoticePageUrl === 'detail' && (
                    <>
                      {!data ? (
                      <>
                        <LectureDetail/>
                      </>
                      ) : (
                      <>
                      <NoticeDetail />  
                      </>
                      )}
                    </>
                  )}
                  {NoticePageUrl === 'create' && (
                    <>
                      <div style={{
                            flex:8,
                            display:'flex',
                            height: '100%',  
                            width: '97%', 
                            backgroundColor:'white',
                            borderRadius:'20px',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                          }}>
                        <NoticeCreate/>
                      </div>
                    </>
                  )}

                  {NoticePageUrl === 'updata' && (
                    <>
                      <div style={{
                        flex:8,
                        display:'flex',
                        height: '100%',  
                        width: '97%', 
                        backgroundColor:'white',
                        borderRadius:'20px',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                      }}>
                      <NoticeUpdata/>
                    </div>
                    </>
                  )}
                </div>
              </>
            )}

            {NoticePageUrl === 'updata' && (
              <>
                <div
                  style={{
                    flex: 8,
                    display: 'flex',
                    height: '100%',
                    width: '97%',
                    // backgroundColor: 'white',
                    borderRadius: '20px',
                    // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <NoticeUpdata />
                </div>
              </>
            )}
          </div>
        </>
      )}

      {lastWord === 'question' && (
        <>
          <div
            className='w-full h-full'
            style={{
              padding: '27px 0px 22px 30px',
            }}
          >
            {QuestionPageUrl === 'detail' && (
              <>
                {!data ? (
                  <>
                    <NoneBox />
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        flex: 8,
                        display: 'flex',
                        height: '100%',
                        width: '97%',
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      <div
                        style={{
                          flex: 6,
                        }}
                      >
                        <QuestionDetail />
                      </div>
                      <div
                        style={{
                          flex: 4,
                          padding: '15px 20px',
                          backgroundColor: '#F2F3F7',
                          borderRadius: '0px 20px 20px 0px',
                          // boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        <CommentList />
                      </div>
                    </div>
                  </>
                )}
              </>
            )}

            {QuestionPageUrl === 'create' && (
              <>
                <div
                  style={{
                    flex: 8,
                    display: 'flex',
                    height: '100%',
                    width: '97%',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <QuestionCreate />
                </div>
              </>
            )}
            {QuestionPageUrl === 'updata' && (
              <>
                <div
                  style={{
                    flex: 8,
                    display: 'flex',
                    height: '100%',
                    width: '97%',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <QuestionUpdata />
                </div>
              </>
            )}
          </div>
        </>
      )}

      {lastWord === 'lecture' && (
        <>
          <div
            className='w-full h-full'
            style={{
              padding: '27px 0px 22px 30px',
            }}
          >
            {LecturePageUrl === 'detail' && (
              <>
                {!data ? (
                  <>
                    <NoneBox />
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        flex: 8,
                        display: 'flex',
                        height: '100%',
                        width: '97%',
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      <div
                        style={{
                          flex: 6,
                        }}
                      >
                        <LectureDetail />
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
            {LecturePageUrl === 'create' && (
              <>
                <div
                  style={{
                    flex: 8,
                    display: 'flex',
                    height: '100%',
                    width: '97%',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <LectureCreate />
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
