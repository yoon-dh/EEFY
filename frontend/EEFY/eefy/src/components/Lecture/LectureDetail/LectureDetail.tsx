import React from 'react';
import { useRecoilState } from 'recoil';
import { NoticeNum } from '@/recoil/Notice';
import dayjs from 'dayjs';
import {
  Container,
  Header,
  Wrappe,
  Title,
  Time,
  Img,
  UseName,
  Line,
  ContentBox,
  Content,
  UpdataBtn,
  DeleteBtn,
  BtnBox,
  ViewerBtn,
  DownloadBtn,
} from './LectureDetail.style';
import Image from 'next/image';
import down from 'public/Img/다운로드.png'
import open from 'public/Img/열기.png'
type Notice = {
  id: string;
  title: string;
  createTime: Date;
  imgUrl: string;
  useName: string;
  content: string;
};

function LectureDetail() {
  const [notice, setNotice] = useRecoilState<Notice | null>(NoticeNum);

  return (
    <>
      <Container
        style={{
          flex: 8,
        }}
      >
        {notice?.title && (
          <>
            <Wrappe style={{ boxShadow: 'none', padding: '2% 5%' }} className='flex flex-col'>
              <div style={{ flex: 9 }}>
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
                      <Img src={notice.imgUrl} />
                      <UseName>{notice.useName}</UseName>
                    </div>
                    <div className='flex' style={{ margin: '10px 0px 0px 0px', justifyContent: 'flex-end' }}>
                      <UpdataBtn>수정</UpdataBtn>
                      <DeleteBtn>삭제</DeleteBtn>
                    </div>
                  </div>
                </Header>
                <Line />
                <ContentBox>
                  <Content>
                    {notice.content}
                  </Content>
                </ContentBox>
              </div>

            </Wrappe>
              <BtnBox>
                <ViewerBtn>
                  Viewer 열기
                  <Image 
                  style={{
                    margin:'0px 0px 0px 5px'
                  }}
                  src={open} width={14} height={14} alt=''/>
                </ViewerBtn>
                <DownloadBtn>
                  자료 다운 받기
                  <Image 
                  style={{
                    margin:'0px 0px 0px 5px'
                  }}
                  src={down} width={14} height={14} alt=''/>
                </DownloadBtn>
              </BtnBox>
          </>
        )}
      </Container>
    </>
  );
}

export default LectureDetail;
