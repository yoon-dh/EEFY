import React from 'react';
import { useRecoilState } from 'recoil';
import { DetailData, NoticePage, NoticeList } from '@/recoil/Notice';
import {userData} from '@/recoil/Auth'
import dayjs from 'dayjs';
import { Container, Header, Wrappe, Title, Time, Img, UseName, Line, ContentBox, Content, UpdataBtn, DeleteBtn } from './NoticeDetail.style';
import {deleteNoticeDelete, getNoticeList, getNoticeDetail } from '@/api/Notice/Notice'
type Notice = {
  id: Number;
  title: string;
  createTime: Date;
  imgUrl: string;
  name: string;
  content: string;
  profileImagePath: string;
  memberId: string;
};

function NoticeDetail() {
  const [notice, setNotice] = useRecoilState<Notice | null>(DetailData);
  const [noticePageUrl, setNoticePageUrl] = useRecoilState(NoticePage);
  const [listData, setListData] = useRecoilState(NoticeList);
  const [user, setUser] = useRecoilState(userData);
  
  const DeleteNotice = async(id:Number)=>{
    const res = await deleteNoticeDelete(id)
    console.log(res)
    if(res?.status===200){
      const classId = {
        classId:27
      }
      const List = await getNoticeList(classId);
      if (List?.status===200){
        setListData(List.data)
        if(List.data){
          const Detail = await getNoticeDetail(List.data[0].id)
          if(Detail?.status===200){
            setNotice(Detail.data)
            setNoticePageUrl('detail')
          }
        }
      }
    }
  }

  return (
    <>
      <Container>
        {notice?.title && (
          <>
            <Wrappe style={{ boxShadow: 'none', padding: '0px 3%' }}>
              <Header>
                <div className='flex'>
                  <Title>{notice.title}</Title>
                  <Time>{dayjs(notice.createTime).format('YYYY.MM.DD')}</Time>
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
                    <Img src={notice.profileImagePath} />
                    <UseName>{notice.name}</UseName>
                  </div>
                  {user.memberId === notice.memberId && (
                    <>
                      <div className='flex' style={{ margin: '10px 0px 0px 0px', justifyContent: 'flex-end' }}>
                        <UpdataBtn onClick={()=>setNoticePageUrl('updata')}>수정</UpdataBtn>
                        <DeleteBtn onClick={()=>DeleteNotice(notice.id)}>삭제</DeleteBtn>
                      </div>
                    </>
                  )}
                </div>
              </Header>
              <Line />
              <ContentBox>
                <Content>
                  {notice.content}
                </Content>
              </ContentBox>
            </Wrappe>
          </>
        )}
      </Container>
    </>
  );
}

export default NoticeDetail;
