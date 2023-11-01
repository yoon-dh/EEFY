import {
  Container,
  Box,
  Wrappe,
  BtnBox,
  Btn1,
  Btn2
} from './ProblemCheckBox.style'
import { useRecoilState } from 'recoil';
import { HomeworkCount } from '@/recoil/Homework';

function ProblemCheckBox(){
  const [numData, setNumData] = useRecoilState(HomeworkCount);

  return(
    <div className='w-full h-full'>
      <Container className='flex-col'>
        <Wrappe 
        className="flex" 
        style={{
          width:'90%',
          margin:'0px auto 0px auto',
          overflow:'auto'
        }}>
          {numData.map((item, index) => (
            <Box key={index}>
                  {item.id}
            </Box>
          ))}
        </Wrappe>
        <BtnBox>
            <div style={{flex:5}}><Btn1 className='boxShadow'>유형 선택</Btn1></div>
            <div style={{flex:5}}><Btn2 className='boxShadow'>저장</Btn2></div>
        </BtnBox>
      </Container>
    </div>
  )
}

export default ProblemCheckBox