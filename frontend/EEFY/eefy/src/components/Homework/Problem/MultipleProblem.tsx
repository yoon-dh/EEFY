import * as S from './MultipleProblem.style';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Problems, SolvedProblem, MySolved } from '@/recoil/Homework';

import { useParams } from 'next/navigation';
interface ChoiceItem {
  content: string;
}
function MultipleProblem() {
  const problem = useRecoilValue(Problems);
  const [solved, setSolved] = useRecoilState<any>(MySolved);
  const pageInfo = useParams();
  const pageNum: any = pageInfo.problemid;

  const [answer, setAnswer] = useState<number | null>(null);
  const [num, setNum] = useState<number | null>(null);

  useEffect(() => {
    console.log(answer);
    console.log(solved);
    if (answer) {
      setSolved({
        ...solved,
        [pageNum - 1]: {
          answer: answer,
          homeworkQuestionId: problem[pageNum - 1].homeworkQuestion.id,
        },
      });
    }
  }, [answer]);

  return (
    <S.Container className='h-full w-full' style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Title */}
      <S.TitleBox>
        <S.ProblemNumber>
          <b>{pageNum}.</b>
        </S.ProblemNumber>
        <S.Title>
          <b>{problem[pageNum - 1]?.homeworkQuestion.title}</b>
        </S.Title>
      </S.TitleBox>
      {/* Content */}
      <S.contentBox>
        <S.Content>{problem[pageNum - 1]?.homeworkQuestion.content}</S.Content>
      </S.contentBox>
      {/* Box */}
      <S.Box>
        {problem[pageNum - 1]?.choices.map((item: ChoiceItem, index: number) => (
          <S.ChoiceBox
            key={index}
            onClick={() => {
              setAnswer(index + 1);
              setNum(index + 1);
            }}
            style={{ color: solved[pageNum - 1]?.answer === index + 1 ? '#057AFF' : '' }}
          >
            <S.Choice>{index + 1}</S.Choice>
            {solved[pageNum - 1]?.answer === index + 1 ? <b>{item.content}</b> : <p>{item.content}</p>}
          </S.ChoiceBox>
        ))}
      </S.Box>
    </S.Container>
  );
}
export default MultipleProblem;
