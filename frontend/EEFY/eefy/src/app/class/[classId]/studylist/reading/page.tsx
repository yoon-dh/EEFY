'use client';
import { useEffect, useState } from 'react';
import { getHomework, getProblem } from '@/api/Homework/Problem';
import { useParams, useRouter } from 'next/navigation';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { HomeworkIds, Problems, SolvedProblem } from '@/recoil/Homework';

interface Item {
  homeworkStudentId: number;
  classHomeworkId: number;
  title: string;
}

function HomeworkTest() {
  const urlData = useParams();
  const router = useRouter();
  const classId = urlData.classId;
  const [homeworkData, setHomeworkData] = useState([]);
  const [HomeworIdData, setHomeworkIdData] = useRecoilState(HomeworkIds);
  const [problem, setProblem] = useRecoilState(Problems);
  const [solvedProblem, setSolvedProblem] = useRecoilState(SolvedProblem);

  useEffect(() => {
    console.log(urlData);
    CallHomework();
  }, []);
  // 과제 불러오기
  const CallHomework = async () => {
    const data = {
      classId: classId,
      page: 0,
      size: 10,
    };
    const res = await getHomework(data);
    console.log(res);
    if (res?.status === 200) {
      setHomeworkData(res.data.homeworks);
    }
  };

  const hanbleClick = async (StudentId: number, HomeworkId: number) => {
    console.log(StudentId, HomeworkId);
    const Ids = {
      homeworkStudentId: StudentId,
      classHomeworkId: HomeworkId,
    };
    const res = await getProblem(HomeworkId);
    console.log(res);
    if (res?.status == 200) {
      setHomeworkIdData(Ids);
      setProblem(res?.data.problems);
      setSolvedProblem(res?.data.solvedProblem);
      router.push('/class/studylist/reading/1/problem/1');
    }
  };

  return (
    <Container>
      문제 뿌리기
      {homeworkData.map((item: Item, index) => (
        <Box key={index} onClick={() => hanbleClick(item.homeworkStudentId, item.classHomeworkId)}>
          {item.title}
        </Box>
      ))}
    </Container>
  );
}
export default HomeworkTest;
const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 10%;
  height: 10%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
