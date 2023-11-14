import * as S from './ExplanationBox.style';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Problems, SolvedProblem } from '@/recoil/Homework';
import { useParams } from 'next/navigation';
interface ChoiceItem {
  content: string; 
}

function ExplanationBox(){
  const [problem, setProblem] = useRecoilState<any>(Problems);
  const [solved, setSolved] = useRecoilState<any>(SolvedProblem);
  const pageInfo: any = useParams();
  const pageNum: number = parseInt(pageInfo.problemid, 10);


  return(
    <S.Container className='flex flex-col w-full'>
      <S.TitleBox>
        <S.ProblemNumber>{pageNum}.</S.ProblemNumber>
        <S.Title>{problem[pageNum - 1]?.homeworkQuestion.title}</S.Title>
      </S.TitleBox>
      <S.contentBox>
        <S.Content>{problem[pageNum - 1]?.homeworkQuestion.content}</S.Content>
      </S.contentBox>
      <S.Box>
        {problem[pageNum - 1]?.choices.map((item: ChoiceItem, index: number) => (
          <S.ChoiceBox key={index} style={{
            backgroundColor:problem[pageNum - 1]?.homeworkQuestion.answer === String(index+1) ? 'green' :(String(index+1) === solved[pageNum-1].submitAnswer ? 'red' : '') 
          }}>
            <S.Choice>{index+1}</S.Choice>
            {item.content}
          </S.ChoiceBox>
        ))}
      </S.Box>
    </S.Container>
  )
}
export default ExplanationBox