import styled from 'styled-components';
import Image from 'next/image';
import Backpack from 'public/Img/Backpack.png';
import style from './NoneBox.module.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Box = styled.div`
  /* background-color: white; */
  width: 94%;
  height: 90%;
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.06);
  z-index: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  /* backdrop-filter: blur(10px); */
`;
const TitleBox = styled.div`
  text-align: center;
  margin: 10% 0px 0px 0px;
`;
const Title = styled.div`
  font-size: 25px;
  color: #d9d9d9;
`;
const ImgBox = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function NoneBox() {
  return (
    <Container>
      <Box>
        <TitleBox>
          <Title>등록된 학습 자료가 없습니다</Title>
        </TitleBox>
        <ImgBox>
          <Image src={Backpack} alt='' width={300} height={100} className={style.img} />
        </ImgBox>
      </Box>
    </Container>
  );
}
export default NoneBox;
