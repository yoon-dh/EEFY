import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil'
import {problemData, homeworkPage} from '@/recoil/Problem'
import { useParams } from 'next/navigation';

const Box = styled.div`
  width: 50px;
  height: 30px;
  background-color: #d6d625;
  color: white;
  margin: 10px 20px 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; // 추가: 마우스 포인터를 변경하여 클릭 가능한 것으로 표시
`;

function ProblemFooter() {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [problem, setProblem] = useRecoilState(problemData)
  const [page, setPage] = useRecoilState(homeworkPage)

  const pageInfo = useParams();
  const pageNum = pageInfo.problemid;
  
  useEffect(() => {
    console.log(count);
    console.log(pageNum);
    setCount(1)
  }, [page]);

  const handlePrevClick = () => {
    if(count > 1){
      const newCount = count - 1;
      setCount(newCount);
      if(page==='problem'){
        router.push(`/class/studylist/reading/1/problem/${newCount}`);
      } else if(page==='explanation'){
        router.push(`/class/studylist/reading/1/explanation/${newCount}`);
      }
    }
  };

  const handleNextClick = () => {
    if(problem.length > count){
      const newCount = count + 1;
      setCount(newCount);
      if(page==='problem'){
        router.push(`/class/studylist/reading/1/problem/${newCount}`);
      } else if(page==='explanation'){
        router.push(`/class/studylist/reading/1/explanation/${newCount}`);
      }
    }else{
      if(page==='problem'){
        alert("다풀었습니다")
      } else if(page==='explanation'){
        alert("마지막 문제입니다")
      }
    }
  };

  return (
    <div style={{ flex: 1, border: '1px solid black', display: 'flex' }}>
      <Box onClick={handlePrevClick}>
        이전
      </Box>
      <Box onClick={handleNextClick}>
        다음
      </Box>
    </div>
  );
}

export default ProblemFooter;
