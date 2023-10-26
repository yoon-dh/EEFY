import { CreateBtn, Line, NoticeTitle } from './ContainerBtn.style';
function ContainerBtn() {
  return (
    <div className='flex mt-1'>
      <div
        style={{
          margin: '0px 0px 0px 2%',
        }}
      >
        <NoticeTitle>공지사항</NoticeTitle>
        <Line
          style={{
            backgroundColor: 'black',
          }}
        />
      </div>

      <CreateBtn>글 작성</CreateBtn>
    </div>
  );
}
export default ContainerBtn;
