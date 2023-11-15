import React from 'react';
import { useRecoilState } from 'recoil';
import { DetailData, NoticePage, NoticeList } from '@/recoil/Notice';
import { userData } from '@/recoil/Auth';
import dayjs from 'dayjs';
import { Container, Header, Wrappe, Title, Time, Img, UseName, Line, ContentBox, Content, UpdataBtn, DeleteBtn } from './NoticeDetail.style';
import { deleteNoticeDelete, getNoticeList } from '@/api/Notice/Notice';
import { useRouter, useParams } from 'next/navigation';

function NoticeDetail(props:any) {
  const params = useParams()
  const router = useRouter()

  const [noticePageUrl, setNoticePageUrl] = useRecoilState(NoticePage);
  const [listItem, setListItem] = useRecoilState(NoticeList);
  const [user, setUser] = useRecoilState(userData);

  const data = props.data

  const DeleteNotice = async (id: Number) => {
    const res = await deleteNoticeDelete(id);
    console.log(res);
    if (res?.status === 200) {
      getList()
    }
  };

  const getList = async()=>{
    const classId = {
      classId: params.classId,
    };
    const res = await getNoticeList(classId)
    if(res?.status===200){
      setListItem(res?.data)
      if (res?.data.length > 0){
        router.push(`/class/${params.classId}/notice/${res?.data[0].id}`)
      }else {
        router.push(`/class/${params.classId}/notice`)
      }
    }
  }

  return (
    <>
      <Container>
        <Wrappe style={{ boxShadow: 'none', padding: '0px 3%' }}>
          <Header>
            <div className='flex' style={{ alignItems: 'center', justifyContent: 'space-between' }}>
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
              {/* 유저 부 */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* <Img src={notice.profileImagePath} /> */}
                <UseName>{data.name}</UseName>
              </div>
              {/* 버튼 부 */}
              {user && user.memberId === data.memberId && (
                <div style={{ display: 'flex' }}>
                  <UpdataBtn className='text-info' onClick={() => setNoticePageUrl('updata')}>
                    <b>modify</b>
                  </UpdataBtn>
                  <DeleteBtn className='text-error' onClick={() => DeleteNotice(data.id)}>
                    <b>delete</b>
                  </DeleteBtn>
                </div>
              )}
            </div>
          </Header>
          {/* <Line /> */}
          <Line>
            <div style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.5)' }}></div>
          </Line>
          <ContentBox>
            <Content>{data.content}</Content>
          </ContentBox>
        </Wrappe>
      </Container>
    </>
  );
}

export default NoticeDetail;
