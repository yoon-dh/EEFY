import styled from 'styled-components';
const LeftBox = styled.div`
  height: 100%;
  width: 40%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  /* box-shadow: 4px 4px 4px rgba(70, 70, 70, 0.25); */
  background: rgba(255, 255, 255, 0.06);
  z-index: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: transparent;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
`;
const RigthBox = styled.div`
  height: 100%;
  width: 40%;
  margin: 0px 0px 0px auto;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  /* box-shadow: 0px 4px 4px rgba(70, 70, 70, 0.25); */
  background: rgba(255, 255, 255, 0.06);
  z-index: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-right: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
`;
const Box = styled.div`
  position: absolute;
  width: 20%;
  height: 100%;
`;
const Spring = styled.div`
  height: 10%;
  width: 50%;
  /* margin: 0px auto 0px auto; */
  flex: 2;
  z-index: 5;
`;
const SpringBox = styled.div`
  display: flex;
  height: 35%;
  position: relative;
  top: 50%;
`;
const Ellipse = styled.div`
  width: 22%;
  height: 100%;
  border-radius: 50%;
  /* background-color: white; */
  box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.25);
  @media (max-width: 1334px) {
    width: 27%;
  }
`;
const Line = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  /* background-color: #fafafa; */
  height: 50%;
  width: 90%;
  border-radius: 50px;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
`;

function NoteCenter() {
  const data = [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];
  return (
    <div className='w-full h-full flex'>
      <Box className='flex flex-col'>
        <Spring>
          <SpringBox>
            <Ellipse className='bg-base-100' />
            <Line className='bg-base-300' />
            <Ellipse className='bg-base-100' style={{ margin: '0px 0px 0px auto' }} />
          </SpringBox>
        </Spring>
        <Spring>
          <SpringBox style={{ top: '40%' }}>
            <Ellipse className='bg-base-100' />
            <Line className='bg-base-300' />
            <Ellipse className='bg-base-100' style={{ margin: '0px 0px 0px auto' }} />
          </SpringBox>
        </Spring>
        <Spring>
          <SpringBox style={{ top: '30%' }}>
            <Ellipse className='bg-base-100' />
            <Line className='bg-base-300' />
            <Ellipse className='bg-base-100' style={{ margin: '0px 0px 0px auto' }} />
          </SpringBox>
        </Spring>
        <Spring>
          <SpringBox style={{ top: '20%' }}>
            <Ellipse className='bg-base-100' />
            <Line className='bg-base-300' />
            <Ellipse className='bg-base-100' style={{ margin: '0px 0px 0px auto' }} />
          </SpringBox>
        </Spring>
        <Spring>
          <SpringBox style={{ top: '10%' }}>
            <Ellipse className='bg-base-100' />
            <Line className='bg-base-300' />
            <Ellipse className='bg-base-100' style={{ margin: '0px 0px 0px auto' }} />
          </SpringBox>
        </Spring>
      </Box>
      <LeftBox className='bg-base-200'></LeftBox>
      <RigthBox className='bg-base-200'></RigthBox>
    </div>
  );
}

export default NoteCenter;
