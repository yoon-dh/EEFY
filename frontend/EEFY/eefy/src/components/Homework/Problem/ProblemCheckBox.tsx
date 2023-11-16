import * as S from './ProblemCheckBox.style';
import { useRecoilValue } from 'recoil';
import { homeworkPage } from '@/recoil/Problem';
import { MySolved, Problems } from '@/recoil/Homework';
import { useRouter } from 'next/navigation';

function ProblemCheckBox() {
  const router = useRouter();
  const problem = useRecoilValue(Problems);
  const solved = useRecoilValue<any>(MySolved);
  const page = useRecoilValue(homeworkPage);

  const handleNextClick = (id: any) => {
    if (page === 'problem') {
      router.push(`/class/studylist/reading/1/problem/${id}`);
    } else if (page === 'explanation') {
      router.push(`/class/studylist/reading/1/explanation/${id}`);
    }
  };

  return (
    <S.Container>
      {page === 'explanation' ? (
        <>
          {Object.values(problem).map((item: any, index: number) => (
            <S.Checkbox
              key={index}
              onClick={() => handleNextClick(index + 1)}
              style={{
                color: '#1a1f27',
                backgroundColor: solved[index].answer != problem[index].homeworkQuestion.answer ? '#FE6384' : solved[index] ? '#36D399' : '',
              }}
            >
              {index + 1}
            </S.Checkbox>
          ))}
        </>
      ) : (
        <>
          {Object.values(problem).map((item: any, index: number) => (
            <S.Checkbox
              key={index}
              onClick={() => handleNextClick(index + 1)}
              style={{
                backgroundColor: solved[index] ? '#057AFF' : '',
              }}
            >
              {index + 1}
            </S.Checkbox>
          ))}
        </>
      )}
    </S.Container>
  );
}

export default ProblemCheckBox;
