function Class() {
  const mainStyle = {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(10, 1fr)',
    gridTemplateAreas:
      "'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-bottom right-bottom' 'left-bottom left-bottom left-bottom right-bottom right-bottom' 'left-bottom left-bottom left-bottom right-bottom right-bottom' 'left-bottom left-bottom left-bottom right-bottom right-bottom' 'left-bottom left-bottom left-bottom right-bottom right-bottom'",
  };

  return (
    <div className='flex w-full h-full rounded-lg'>
      <div className='w-full h-full' style={mainStyle}>
        <div style={{ gridArea: 'left-top' }}>
          <div className='bg-primary'>primary</div>
          <div className='bg-secondary'>secondary</div>
          <div className='bg-accent'>accent</div>
          <div className='bg-neutral'>neutral</div>
          <div className='bg-base-100'>base-100 / 배경</div>
          <div className='bg-base-200'>base-200 / 박스 배경</div>
          <div className='bg-info'>info / 링크 텍스트 색상</div>
          <div className='bg-success'>success</div>
          <div className='bg-warning'>warning</div>
          <div className='bg-error'>error</div>
        </div>
        <div style={{ gridArea: 'left-bottom' }}>{/* <StudyBoard /> */}</div>
        <div style={{ gridArea: 'right-top' }}>{/* <RightBoard contentType={0} /> */}</div>
        <div style={{ gridArea: 'right-bottom' }}>{/* <RightBoard contentType={1} /> */}</div>
      </div>
    </div>
  );
}
export default Class;
