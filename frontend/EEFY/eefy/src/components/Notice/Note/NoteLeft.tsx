import styled from 'styled-components';
import NoticeListBoard from '../NoticeList/NoticeListBoard';
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
