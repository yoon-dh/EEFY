'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue } from 'recoil';
import { homeworkPage } from '@/recoil/Problem';
import { MySolved } from '@/recoil/Homework';
import { useParams } from 'next/navigation';
import { postSolveProblem } from '@/api/Homework/Problem';
import { HomeworkIds, Problems } from '@/recoil/Homework';

import { Theme } from '@/recoil/Theme';

import * as I from '../../Class/StudyDetail/Speaking/ImageComponents';

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
  const [problem, setProblem] = useRecoilState(Problems);
  const [page, setPage] = useRecoilState(homeworkPage);
  const mySolved = useRecoilValue(MySolved);
  const ids = useRecoilValue(HomeworkIds);
  const pageInfo = useParams();
  const pageNum = pageInfo.problemid;

  const theme = useRecoilValue(Theme);

  let buttonColor;
  if (theme !== 'winter') {
    buttonColor = '#fff';
  } else {
    buttonColor = '#708097';
  }

  useEffect(() => {
    console.log(count);
    console.log(pageNum);
    console.log(page);
    setCount(Number(pageNum));
  }, [pageNum]);

  const handlePrevClick = () => {
    console.log('이전', count, page);
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      if (page === 'problem') {
        router.push(`/class/${pageInfo.classId}/studylist/reading/${ids.classHomeworkId}/problem/${newCount}`);
      } else if (page === 'explanation') {
        router.push(`/class/${pageInfo.classId}/studylist/reading/${ids.classHomeworkId}/explanation/${newCount}`);
      }
    }
  };

  const handleNextClick = () => {
    console.log('다음', count, page);
    if (problem.length > count) {
      const newCount = count + 1;
      setCount(newCount);
      if (page === 'problem') {
        postSolve();
        router.push(`/class/${pageInfo.classId}/studylist/reading/${ids.classHomeworkId}/problem/${newCount}`);
      } else if (page === 'explanation') {
        router.push(`/class/${pageInfo.classId}/studylist/reading/${ids.classHomeworkId}/explanation/${newCount}`);
      }
    } else {
      if (page === 'problem') {
        alert('다풀었습니다');
      } else if (page === 'explanation') {
        alert('마지막 문제입니다');
      }
    }
  };

  // 제출
  const postSolve = async () => {
    const formData = new FormData();
    const solveProblemRequest = {
      homeworkQuestionId: mySolved[Number(pageNum) - 1].homeworkQuestionId,
      homeworkStudentId: ids.homeworkStudentId,
      submitAnswer: mySolved[Number(pageNum) - 1].answer,
    };
    const jsonBlob = new Blob([JSON.stringify(solveProblemRequest)], {
      type: 'application/json',
    });
    formData.append('solveProblemRequest', jsonBlob);
    const res = await postSolveProblem(formData);
    console.log(res);
  };
  return (
    <div style={{ height: '10%', backdropFilter: 'blur(10px)', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '80%', height: '100%', display: 'flex', gap: '2%', alignItems: 'center', justifyContent: 'flex-end' }}>
        <div onClick={handlePrevClick}>
          <I.LeftBtn btnSize={36} btnColor={buttonColor} />
        </div>
        <div onClick={handleNextClick}>
          <I.RightBtn btnSize={36} btnColor={buttonColor} />
        </div>
      </div>
    </div>
  );
}

export default ProblemFooter;
