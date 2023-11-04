import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { NoticeList, NoticeNum } from '@/recoil/Notice';
// 날짜 변환
import dayjs from 'dayjs';
import { Card, Title, Time, Container, Wrappe } from './NoticeListBoard.style';
function NoticeListBoard() {
  const [noticeList, setNoticeList] = useRecoilState(NoticeList);
  const [num, setNum] = useRecoilState(NoticeNum);
  useEffect(() => {
    console.log(noticeList);
  }, []);
  return (
    <Container
      style={{
        width: '90%',
        height: '100%',
      }}
    >
      <Wrappe
        style={{
          height: '100%',
        }}
      >
        {noticeList.map((item, index) => (
          <Card
            className='bg-default'
            key={index}
            style={{
              margin: index == noticeList.length-1 ? '25px auto 4px auto' :(index == 0 ? '3px auto 25px auto' : ''),
            }}
            onClick={() => {
              console.log(item);
              setNum(item);
            }}
          >
            <Title>
                {item.title.slice(0,30) + '...'}
            </Title>
            <Time>{dayjs(item.createTime).format('YYYY.MM.DD')}</Time>
          </Card>
        ))}
      </Wrappe>
    </Container>
  );
}
export default NoticeListBoard;
