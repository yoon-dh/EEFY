import React from 'react';
import { useRecoilState } from 'recoil';
import { NoticeList } from '@/recoil/Notice';
import {QuestionPage} from '@/recoil/Question'
import {deleteQuestionDelete, getQuestionList} from '@/api/Question/Question'

import dayjs from 'dayjs';
import { Container, Header, Wrappe, Title, Time, Img, UseName, Line, ContentBox, Content, UpdataBtn, DeleteBtn } from './QuestionDetail.style';
import { useRouter, useParams } from 'next/navigation';


function QuestionDetail(props:any) {
  const data = props.data
  const params = useParams()
  const router = useRouter()
  const [questionPageUrl, setQuestionPageUrl] = useRecoilState(QuestionPage)
  const [listItem, setListItem] = useRecoilState(NoticeList);

  const handleDetele = async(id:any)=>{
    const res = await deleteQuestionDelete(4)
    if (res?.status === 200) {
      getList()
    }
  }
  const getList = async()=>{
    const res = await getQuestionList(Number(params.classId))
    if(res?.status===200){
      setListItem(res?.data)
      if (res?.data.length > 0){
        router.push(`/class/${params.classId}/question/${res?.data[0].id}`)
      }else {
        router.push(`/class/${params.classId}/question`)
      }
    }
  }

  return (
    <>
      <Container
        style={{
          flex: 8,
        }}
      >
        {data?.title && (
          <>
            <Wrappe style={{ boxShadow: 'none', padding: '2% 5%' }}>
              <Header>
                <div className='flex'>
                  <Title>{data.title}</Title>
                  <Time>{dayjs(data.createTime).format('YYYY.MM.DD')}</Time>
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
                      width: '300px',
                    }}
                  >
                    <UseName>{data.useName}</UseName>
                  </div>
                  <div className='flex' style={{ margin: '10px 0px 0px 0px', justifyContent: 'flex-end' }}>
                    <UpdataBtn onClick={()=>setQuestionPageUrl('updata')}>수정</UpdataBtn>
                    <DeleteBtn onClick={()=>handleDetele(data.id)}>삭제</DeleteBtn>
                  </div>
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
