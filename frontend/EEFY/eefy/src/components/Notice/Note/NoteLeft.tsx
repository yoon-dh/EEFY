import styled from 'styled-components';
import NoticeListBoard from '../NoticeList/NoticeListBoard';
const Container = styled.div`
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  box-shadow: 0px 4px 4px rgba(70, 70, 70, 0.25);
`;
function NoteLeft() {
  return (
    <Container className='w-full h-full bg-base-200'>
      <div
        className='w-full h-full'
        style={{
          padding: '27px 0px 22px 30px',
        }}
      >
        <NoticeListBoard />
      </div>
    </Container>
  );
}

export default NoteLeft;
