import styled from 'styled-components';
import Image from 'next/image';
import Backpack from 'public/Img/Backpack.png';
import style from './NoneBox.module.css';
import { useRecoilValue } from 'recoil';
import { Name } from '@/recoil/Notice';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  z-index: 0;
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
  const urlName = useRecoilValue(Name)
  return (
    <Container>
      <Box>
        <TitleBox>
          {urlName === 'notice' && (
            <>
            <Title>등록된 공지사항이 없습니다</Title>
            </>
          )}
          {urlName === 'question' && (
            <>
            <Title>등록된 질의응답이 없습니다</Title>
            </>
          )}
          {urlName === 'lecture' && (
            <>
            <Title>등록된 학습 자료가 없습니다</Title>
            </>
          )}
        </TitleBox>
        <ImgBox>
          <Image src={Backpack} alt='' width={300} height={100} className={style.img} />
        </ImgBox>
      </Box>
    </Container>
  );
}
export default NoneBox;
