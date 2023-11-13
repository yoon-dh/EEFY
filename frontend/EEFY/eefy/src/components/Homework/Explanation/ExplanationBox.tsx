import * as S from './ExplanationBox.style';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { problemData, SolvedProblem } from '@/recoil/Problem';
import { useParams } from 'next/navigation';
interface ChoiceItem {
  content: string; 
}

function ExplanationBox(){
  const [problem, setProblem] = useRecoilState<any>(problemData);
  const [solved, setSolved] = useRecoilState<any>(SolvedProblem);
  const pageInfo: any = useParams();
  const pageNum: number = parseInt(pageInfo.problemid, 10);


  return(
    <S.Container className='flex flex-col h-full w-full'>
      <S.TitleBox>
        <S.ProblemNumber>{pageNum}.</S.ProblemNumber>
        <S.Title>{problem[pageNum - 1].homeworkQuestion.title}</S.Title>
      </S.TitleBox>
      <S.contentBox>
        <S.Content>{problem[pageNum - 1].homeworkQuestion.content}</S.Content>
      </S.contentBox>
      <S.Box>
        {problem[pageNum - 1].choices.map((item: ChoiceItem, index: number) => (
          <S.ChoiceBox key={index} style={{
            // backgroundColor:solved[pageNum-1].solvedProblem. (index === 1 ? 'gold' : '') 
            backgroundColor: solved[pageNum-1].submitAnswer === index+1 ? 'red' : (index+1 === 1 ? 'gold' : '') 
          }}>
            <S.Choice>{index+1}</S.Choice>
            {item.content} =&gt; {solved[pageNum-1].submitAnswer}
          </S.ChoiceBox>
        ))}
      </S.Box>
    </S.Container>
  )
}
export default ExplanationBox