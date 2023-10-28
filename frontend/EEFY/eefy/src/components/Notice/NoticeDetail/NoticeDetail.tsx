import { useRecoilState } from 'recoil';
import { NoticeNum } from '@/recoil/Notice';
// 날짜 변환
import dayjs from 'dayjs';
import { Container, Header, Wrappe, Title, Time, Img, UseName, Line } from './NoticeDetail.style';
function NoticeDetail() {
  const [notice, setNotice] = useRecoilState(NoticeNum);
  return (
    <Container
      style={{
        flex: 8,
      }}
    >
      <Wrappe style={{ boxShadow: 'none', padding: '0px 12px' }}>
        <Header>
          <Title>{notice.title}</Title>
          <Time>{dayjs(notice.createTime).format('YYYY.MM.DD')}</Time>
          <div
            style={{
              display: 'flex',
            }}
          >
            <Img src={notice.imgUrl} />
            <UseName>{notice.useName}</UseName>
          </div>
        </Header>
        <Line />
        <div>{notice.content}</div>
      </Wrappe>
    </Container>
  );
}
export default NoticeDetail;
