"use client"
import styled from "styled-components"
import ProblemCheckBox from "@/components/Homework/Problem/ProblemCheckBox"
import ProblemFooter from "@/components/Homework/Problem/ProblemFooter"
import { useRouter } from 'next/navigation';
import { useRecoilState } from "recoil";
import {problemData, SolvedProblem, homeworkPage} from '@/recoil/Problem'
import { useParams } from 'next/navigation';

import Swal from 'sweetalert2'
function Homework({ children }: { children: React.ReactNode }){
  const router = useRouter();
  const [problem, setProblem] = useRecoilState(problemData);
  const [solved, setSolved] = useRecoilState(SolvedProblem)
  const [page, setPage] = useRecoilState(homeworkPage)
  const pageInfo = useParams();
  const pageNum = pageInfo.problemid;
  const pageNumber = Array.isArray(pageNum) ? pageNum[0] : pageNum;
  const handleExit = ()=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      text: "나가시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "나가기",
      cancelButtonText: "취소",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/class/studylist")
      } 
    });
  }
  const handleSave = ()=>{
    console.log('채점하기')
    for(let i = 0;i<solved.length;i++){
      if (solved[i].solvedProblem===null){
        setPage("problem")
        Swal.fire({
          icon: "warning",
          title: "아직 못푼 문제가 있습니다",
          showConfirmButton: false,
          timer: 1500
        });
        return
      }
    }
    setPage("explanation")
    router.push("/class/studylist/reading/1/explanation/1")
  }
  
  const handleSolved = ()=>{
    console.log(pageNum)
    Swal.fire({
      title: `정답은 "${problem[parseInt(pageNumber)]?.homeworkQuestion.answer}"`,
      // showClass: {
      //   popup: `
      //     animate__animated
      //     animate__fadeInUp
      //     animate__faster
      //   `
      // },
      // hideClass: {
      //   popup: `
      //     animate__animated
      //     animate__fadeOutDown
      //     animate__faster
      //   `
      // }
    });
  }

  return(
    <Container className="w-full h-full flex">

      <div className="flex flex-col" style={{flex:7, border:'1px solid black', width:'100%'}}>
        <Header>
          <Title>
            문제집 이름
          </Title>
          <SolvedBtn onClick={handleSolved}>
            정답 보기
          </SolvedBtn>
        </Header>
        <div className="h-full" 
        style={{
          flex:7, 
          margin:'0px 0px 0px 10%',
          width:'80%'
          }}>
          {children}
        </div>
        <ProblemFooter/>
      </div>

      <Wrappe>
        <Checkbox>
          <ProblemCheckBox/>
        </Checkbox>
        <BtnBox>
          <ExitBtn>
            <div onClick={handleExit}>
              나가기
            </div>
          </ExitBtn>
          <SaveBtn>
            <div onClick={handleSave}>
              마치기
            </div>
          </SaveBtn>
        </BtnBox>
      </Wrappe>
    </Container>
  )
}
export default Homework

const Container = styled.div`
border: 1px solid black;
`
const Header = styled.div`
border: 1px solid black;
flex: 1;
display: flex;
`
const Title = styled.div`
`
const SolvedBtn = styled.div`
margin: 0px 0px 0px auto;
`
const Wrappe = styled.div`
flex: 2;
width: 20%;
border: 1px solid black;
margin: 0px 0px 0px 6%;
`
const Checkbox = styled.div`
height: 80%;
margin: 20px;
border: 1px solid black;
overflow: auto;
`
const ExitBtn = styled.div`
border: 1px solid black;
flex: 4;
height: 40px;
background-color: gray;
color: white;
display: flex;
justify-content: center;
align-items: center;
margin-right:10px;
`
const BtnBox = styled.div`
border: 1px solid black;
height: 10%;
display: flex;
justify-content: center;
align-items: center;
display: flex;
padding: 10px;
`
const SaveBtn = styled.div`
border: 1px solid black;
flex: 4;
height: 40px;
background-color: gray;
color: white;
display: flex;
justify-content: center;
align-items: center;
`
