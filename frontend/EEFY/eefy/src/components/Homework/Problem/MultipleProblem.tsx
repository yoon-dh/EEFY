import * as S from './MultipleProblem.style';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { problemData, SolvedProblem } from '@/recoil/Problem';
import { useParams } from 'next/navigation';
interface ChoiceItem {
  content: string; 
}
function MultipleProblem() {
  const [problem, setProblem] = useRecoilState<any>(problemData);
  const [solved, setSolved] = useRecoilState<any>(SolvedProblem);
  const pageInfo = useParams();
  const pageNum: any = pageInfo.problemid;
  const [answer, setAnswer] = useState<number | null>(null);
  const [num, setNum] = useState<number | null>(null)

  
  const data = {
    id: 0,
    submitAnswer: answer,
    filePath: 'string',
    score: 0,
    feedback: 'string',
  };

  useEffect(() => {
    console.log(answer);
    console.log(solved)
    if(answer){
      setSolved({ ...solved, [pageNum - 1]: data });
    }
  }, [answer]);

  return (
    <S.Container className='flex flex-col h-full w-full'>
      <S.TitleBox>
        <S.ProblemNumber>{pageNum}.</S.ProblemNumber>
        <S.Title>{problem[pageNum - 1].homeworkQuestion.title}</S.Title>
      </S.TitleBox>
      <S.contentBox>
        <S.Content>{problem[pageNum - 1].homeworkQuestion.content}</S.Content>
      </S.contentBox>
      <S.Box>
        {problem[pageNum - 1].choices.map((item:ChoiceItem, index:number) => (
          <S.ChoiceBox key={index} onClick={()=>{
            setAnswer(index+1);
            setNum(index+1)
          }}>
            <S.Choice style={{
              backgroundColor: solved[pageNum-1].submitAnswer === index+1 ? 'gray':''
            }}>{index+1}</S.Choice>
            {item.content}
          </S.ChoiceBox>
        ))}
      </S.Box>
    </S.Container>
  );
}
export default MultipleProblem;
