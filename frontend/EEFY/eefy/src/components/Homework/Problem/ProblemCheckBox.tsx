import * as S from './ProblemCheckBox.style';
import { useRecoilValue } from 'recoil';
import {problemData, SolvedProblem, homeworkPage} from '@/recoil/Problem'
import { useRouter } from 'next/navigation';

function ProblemCheckBox() {
  const router = useRouter();
  const problem = useRecoilValue(problemData)
  const solved = useRecoilValue<any>(SolvedProblem)
  const page= useRecoilValue(homeworkPage)

  const handleNextClick = (id:any) => {
    if(page==='problem'){
      router.push(`/class/studylist/reading/1/problem/${id}`);
    } else if(page==='explanation'){
      router.push(`/class/studylist/reading/1/explanation/${id}`);
    }
  };

  return (
    <S.Container>
      {page === 'explanation' ? (
        <>
        {problem.map((item:String, index:number) => (
          <S.Checkbox key={index} onClick={()=>handleNextClick(index+1)}
          style={{
            backgroundColor: solved[index].submitAnswer != problem[index].homeworkQuestion.answer ? 'red' : (solved[index].submitAnswer ? 'gray' : '')
          }}
          >
            {index+1}
          </S.Checkbox>
        ))}
        </>
      ) : (
        <>
        {problem.map((item:String, index:number) => (
          <S.Checkbox key={index} onClick={()=>handleNextClick(index+1)}
          style={{
            backgroundColor: (solved[index].submitAnswer ? 'gray' : '')
          }}
          >
            {index+1}
          </S.Checkbox>
        ))}
        </>
      )}
    </S.Container>
  );
}

export default ProblemCheckBox;
