import React, {useState, useEffect} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { NoticeList } from '@/recoil/Notice';
import {QuestionPage, QuestionWaitStatus} from '@/recoil/Question'
import {deleteQuestionDelete, getQuestionList, putQuestion} from '@/api/Question/Question'

import dayjs from 'dayjs';
import { Container, Header, Wrappe, Title, Time, Img, UseName, Line, ContentBox, Content, UpdataBtn, DeleteBtn } from './QuestionDetail.style';
import { useRouter, useParams } from 'next/navigation';
import { userData } from '@/recoil/Auth';

function QuestionDetail(props:any) {
  const data = props.data
  const params = useParams()
  const router = useRouter()
  const user = useRecoilValue(userData)
  const [questionPageUrl, setQuestionPageUrl] = useRecoilState(QuestionPage)
  const [listItem, setListItem] = useRecoilState(NoticeList);
  const [waitStatus, setWaitStatus] = useRecoilState(QuestionWaitStatus)
  const [status, setstatus] = useState(false)

  useEffect(()=>{
    setstatus(data.waitStatus)
  },[])

  const handleDetele = async(id:any)=>{
    const res = await deleteQuestionDelete(id)
    if (res?.status === 200) {
      getList()
    }
  }
  const getList = async()=>{
    const res = await getQuestionList(Number(params.classId))
    if(res?.status===200){
      setListItem(res?.data)
      const neWData = res?.data.filter((item:any) => item.waitStatus === waitStatus)
      if (neWData.length > 0){
        console.log(res?.data.length)
        router.push(`/class/${params.classId}/question/${neWData[0].id}`)
      }else {
        router.push(`/class/${params.classId}/question`)
      }
    }
  }

  const Solving =async()=>{
    const res = await putQuestion(String(params.questionId))
    if (res?.status === 200) {
      const res = await getQuestionList(Number(params.classId))
      if(res?.status===200){
        setListItem(res?.data)
        const neWData = res?.data.filter((item:any) => item.waitStatus === !status)
        setWaitStatus(!waitStatus)
        setstatus(!status)
        if (neWData.length > 0){
          router.push(`/class/${params.classId}/question/${params.questionId}`)
        }else {
          router.push(`/class/${params.classId}/question`)
        }
      }
    }
  }
  return (
    <>
      <Container>
        {data?.title && (
          <>
            <Wrappe style={{ boxShadow: 'none', padding: '4% 5%' }}>
              <Header>
                <div className='flex'>
                  <Title>{data.title}</Title>
                  <Time>{dayjs(data.createdAt).format('YYYY.MM.DD')}</Time>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <UseName><b>{data.name}</b></UseName>
                  </div>
                    {user.memberId === data.memberId && (
                      <>
                        <div className='flex' style={{ margin: '10px 0px 0px 0px', justifyContent: 'flex-end' }}>
                          {data.waitStatus === false && (
                            <>
                              <UpdataBtn className='text-info' onClick={Solving}>
                              <b>Solving</b>
                              </UpdataBtn>
                              <UpdataBtn className='text-info' onClick={()=>setQuestionPageUrl('updata')}>
                              <b>modify</b>
                              </UpdataBtn>
                            </>
                          )}
                          <DeleteBtn className='text-error' onClick={()=>handleDetele(data.questionId)}>
                          <b>delete</b>
                          </DeleteBtn>
                        </div>
                      </>
                    )}
                </div>
              </Header>
              <Line />
              <ContentBox>
                <Content>
                  {data.content}
                </Content>
              </ContentBox>
            </Wrappe>
          </>
        )}
      </Container>
    </>
  );
}

export default QuestionDetail;
