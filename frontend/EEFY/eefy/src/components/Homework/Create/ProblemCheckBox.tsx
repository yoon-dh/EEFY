import React, {useState, useEffect} from 'react';
import {
  Container,
  Box,
  Wrappe,
  BtnBox,
  Btn1,
  Btn2
} from './ProblemCheckBox.style'
import { useRecoilState } from 'recoil';
import { Homework, HomeworkProblem } from '@/recoil/Homework';
import CategoryModal from '../Modal/CategoryModal';

function ProblemCheckBox(){
  const [homework, setHomework] = useRecoilState(Homework);
  const [problem, setProblem] = useRecoilState(HomeworkProblem);
  const [isCategoryModal, setIsCategoryModal] = useState(false)

  const onClose = () =>[
    setIsCategoryModal(!isCategoryModal)
  ]
  useEffect(()=>{
    console.log(problem,'체크박스')
  },[problem])

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
          {problem && Array.isArray(problem) && problem.length > 0 && (
            <>
            {problem.map((item, index) => (
              <Box key={index}>
                    {index + 1}. {item.title.slice(0,10) + '...'}
              </Box>
            ))}
            </>
          )}
          </Wrappe>
          <BtnBox>
            <div style={{flex:5}}>
              <Btn2 className='boxShadow'>
                저장
              </Btn2>
            </div>
          </BtnBox>
        </Container>

      {isCategoryModal && (<CategoryModal/>)}
    </div>
  )
}

export default ProblemCheckBox