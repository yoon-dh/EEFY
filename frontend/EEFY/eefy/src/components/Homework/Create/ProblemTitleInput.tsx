import React, {useState} from "react"
import { useRecoilState } from "recoil"
import { HomeworkProblem } from "@/recoil/Homework"
import styled from "styled-components"
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const TitleInputBox = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.div`
  text-align: center;
  margin: 0px 0px 20px 0px;
  font-size: 30px;
  color:#925FE2;
  cursor: pointer;
`
const TitleInput = styled.input`
  outline: none;
  border: 5px solid #ae89ea;
  width: 50%;
  padding: 10px 20px;
  margin: 0px 0px 20px 0px;
  border-radius: 5px;
`
const Btn = styled.div`
  width: 50%;
  height: 40px;
  background-color: #925FE2;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`
function ProblemTitleInput(){
  const [problem, setProblem] = useRecoilState(HomeworkProblem);
  const [title, setTitle] = useState('')
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setProblem({ ...problem, Title: newTitle });
  }
  return(
      <Container className="w-full h-full">
        <TitleInputBox className="flex-col">
          <Title>이름을 입력하세요.</Title>
          <TitleInput id='title' value={title} onChange={(e)=>{
            setTitle(e.target.value)
          }}/>
          <Btn onClick={()=>{
            setProblem({...problem, Title:title})
          }}>생성</Btn>
        </TitleInputBox>
      </Container>
  )
}
export default ProblemTitleInput