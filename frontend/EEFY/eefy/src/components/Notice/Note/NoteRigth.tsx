import NoticeDetail from '../NoticeDetail/NoticeDetail';
function NoteRigth() {
  return (
    <div
      className='w-full h-full bg-base-200'
      style={{
        borderBottomRightRadius: '20px',
        borderTopRightRadius: '20px',
        boxShadow: '4px 4px 4px rgba(70, 70, 70, 0.25)',
      }}
    >
      <div
        className='w-full h-full'
        style={{
          padding: '27px 0px 22px 30px',
        }}
      >
        <NoticeDetail />
      </div>
    </div>
  );
}

export default NoteRigth;
