// 나중에 삭제 요망
'use client';
// import Image from 'next/image';

import * as I from './ImageComponents';
import ProblemComponent from './ProblemComponent';
import SolvingQuestion from './SolvingQuestion';
import SolvedQuestion from './SolvedQuestion';

import { useRecoilValue, useRecoilState } from 'recoil';
import { WorkbookInfo, QuestionInfo, IsSolved, IsRecording, IsModalOpen } from '@/recoil/StudyDetails/SpeakDetails';

const dummyRole: string = 'STUDENT'; // 선생이면 TEACHER

function Speaking() {
  const mainStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)',
    gridTemplateAreas: "'a' 'a' 'a' 'a' 'b' 'b' 'b' 'b' 'c' ",
    gap: '3%',
  };

  const workbookData = useRecoilValue(WorkbookInfo); // 문제집 정보
  const [questionData, setQuestionData] = useRecoilState(QuestionInfo); // 문제 정보
  const [isSolved, setIsSolved] = useRecoilState(IsSolved); // 문제 풀었는지 여부
  const isRecording = useRecoilValue(IsRecording); // 녹음중 여부 - 이건 여기서 안쓸지도
  const isModalOpen = useRecoilValue(IsModalOpen);

  const goPrev = () => {
    if (!isRecording && questionData.page !== 0) {
      const prevPage = questionData.page - 1;
      // 서버에 prevPage 페이지 요청 -> { ProblemInfo, StudentIsSolved, IsSolved } 다음의 recoil 정보 최신화
      setQuestionData(prev => ({ ...prev, page: prevPage })); // 임시
    }
  };

  const goNext = () => {
    if (!isRecording && questionData.page !== workbookData.pages - 1) {
      const nextPage = questionData.page + 1;
      // 서버에 nextPage 페이지 요청 -> { ProblemInfo, StudentIsSolved, IsSolved } 다음의 recoil 정보 최신화
      setQuestionData(prev => ({ ...prev, page: nextPage })); // 임시
    }
  };

  return (
    <>
      {/* 제목 */}
      <div className='text-2xl font-bold flex items-center' style={{ flex: 1 }}>
        {workbookData.title}
      </div>

      <div
        className='relative w-full h-full rounded-3xl boxShadow'
        style={{ background: 'linear-gradient(99deg, rgba(153, 155, 213, 0.50) 53.12%, rgba(79, 72, 155, 0.50) 155.43%)', padding: '2%', flex: 10 }}
      >
        <div className='w-full h-full' style={mainStyle}>
          {/* 문제 - 공통 */}
          <div className='relative h-full bg-base-200 rounded-2xl' style={{ gridArea: 'a' }}>
            <ProblemComponent script={questionData.script} url={questionData.url} />
          </div>

          {/* 문제풀이 - 강사 && 학생 */}
          <div className='relative bg-base-200 rounded-2xl' style={{ gridArea: 'b' }}>
            {/* SolvedComponent - 역할이 강사 || 문제를 푼 경우 , SolvingComponent - 역할이 학생 && 문제를 풀지 않은 경우 */}
            {/* {dummyRole === 'TEACHER' || isSolved ? <SolvedQuestion solvedProblemData={solvedProblemData}  /> : <SolvingQuestion />} */}
            {dummyRole === 'STUDENT' && !isSolved && !isRecording && !isModalOpen && (
              <div className='absolute bottom-5 right-5 w-44 h-12 bg-secondary rounded-md flex justify-center items-center'>
                <p className='text-secondary-content'>제출한 파일</p>
              </div>
            )}
          </div>

          {/* 하단 문제 이동 버튼 - 공통 */}
          <div className='relative rounded-2xl' style={{ gridArea: 'c' }}>
            <div className='absolute bottom-0 right-0 w-40 h-auto flex justify-between items-center'>
              <div
                onClick={goPrev}
                className={`tooltip tooltip-bottom tooltip-base-300 ${
                  questionData.page === 0 && 'invisible'
                } cursor-pointer hover:-translate-x-0.5 hover:scale-105`}
                data-tip={questionData.page === 0 ? '첫 페이지입니다.' : '이전'}
              >
                <I.LeftBtn btnSize={36} btnColor={'#fff'} />
              </div>
              <div className='text-xl font-bold text-white flex justify-center items-center gap-2 text-center'>
                <div className='h-fit'>{questionData.page + 1}</div>
                <div className='h-fit'>/</div>
                <div className='h-fit'>{workbookData.pages}</div>
              </div>
              <div
                onClick={goNext}
                className={`tooltip tooltip-bottom tooltip-base-300 ${
                  questionData.page === workbookData.pages - 1 && 'invisible'
                } cursor-pointer hover/edit:translate-x-0.5 hover:scale-105`}
                data-tip={questionData.page === workbookData.pages - 1 ? '마지막 페이지입니다.' : '다음'}
              >
                <I.RightBtn btnSize={36} btnColor={'#fff'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Speaking;
