'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { getHomeworkGetProblem } from '@/api/Class/studylist';

import { useRecoilState, useRecoilValue } from 'recoil';
import { userData } from '@/recoil/Auth';
import { IsModalOpen, IsRecording, IsSolved, QuestionInfo, RequestHomeworkInfo, SolvedProblemInfo, WorkbookInfo } from '@/recoil/StudyDetails/SpeakDetails';

import ProblemComponent from '@/components/Class/StudyDetail/Speaking/ProblemComponent';
// import SolvingQuestion from '@/components/Class/StudyDetail/Speaking/SolvingQuestion';
import SolvedQuestion from '@/components/Class/StudyDetail/Speaking/SolvedQuestion';

import dynamic from 'next/dynamic';
const SolvingQuestion = dynamic(() => import('@/components/Class/StudyDetail/Speaking/SolvingQuestion'), { ssr: false });

import * as S from '@/styles/MainStyle.style';
import * as I from '@/components/Class/StudyDetail/Speaking/ImageComponents';
import { CurrentHomeworkInfo } from '@/recoil/StudyList/StudyList';

function SpeakingProblemId() {
  const router = useRouter();
  const mainStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)',
    gridTemplateAreas: "'a' 'a' 'a' 'a' 'b' 'b' 'b' 'b' 'c' ",
    gap: '3%',
  };

  const homeworkType = 'speaking';

  const paramsObj: any = useParams(); //예시 {classId: '46', homeworkId: '24'}
  const userInfo = useRecoilValue(userData); // {memberId: 21, email: '-@naver.com', name: '김민균', nickname: null, role: 'STUDENT'}
  const currentHomeworkInfo = useRecoilValue(CurrentHomeworkInfo);
  console.log(currentHomeworkInfo);

  const [isSolved, setIsSolved] = useRecoilState(IsSolved); // 문제 풀었는지 여부
  const isRecording = useRecoilValue(IsRecording); // 녹음중 여부 - 이건 여기서 안쓸지도
  const isModalOpen = useRecoilValue(IsModalOpen);

  const [problemsData, setProblemsData] = useState<any>(null);
  const [solvedProblemData, setSolvedProblemData] = useRecoilState(SolvedProblemInfo);
  const [requestHomeworkInfo, setRequestHomeworkInfo] = useRecoilState(RequestHomeworkInfo); // 문제 해결 시
  console.log('solvedProblemData', solvedProblemData);
  const [workbookData, setWorkbookData] = useRecoilState(WorkbookInfo);
  const [questionData, setQuestionData] = useRecoilState(QuestionInfo);

  // Link로 바꿀 예정
  const goPrev = () => {
    if (!isRecording && questionData.page !== 0 && problemsData) {
      const prevPage = questionData.page - 1;
      const prevHomeworkId = problemsData[prevPage].homeworkQuestion.id;
      router.push(`/class/${paramsObj.classId}/studylist/${homeworkType}/${paramsObj.homeworkId}/problem/${prevHomeworkId}`);

      // 서버에 prevPage 페이지 요청 -> { ProblemInfo, StudentIsSolved, IsSolved } 다음의 recoil 정보 최신화
      // setQuestionData(prev => ({ ...prev, page: prevPage })); // 임시
    }
  };

  // Link로 바꿀 예정
  const goNext = () => {
    if (!isRecording && questionData?.page !== workbookData.pages - 1) {
      const nextPage = questionData?.page + 1;
      const nextHomeworkId = problemsData[nextPage].homeworkQuestion.id;
      router.push(`/class/${paramsObj.classId}/studylist/${homeworkType}/${paramsObj.homeworkId}/problem/${nextHomeworkId}`);

      // const nextPage = questionData.page + 1;
      // 서버에 nextPage 페이지 요청 -> { ProblemInfo, StudentIsSolved, IsSolved } 다음의 recoil 정보 최신화
      // setQuestionData(prev => ({ ...prev, page: nextPage })); // 임시
    }
  };

  const submitFileHandler = () => {
    if (!isSolved) {
      setIsSolved(!isSolved);
    }
  };

  useEffect(() => {
    async function fetchData(classHomeworkId: number, problemId: number) {
      const responseData = await getHomeworkGetProblem(classHomeworkId);
      const newProblemId = problemId; // 현재 문제 아이디 - params로 대체
      console.log('responseData', responseData);
      // 과제의 문제 정보
      const initialQuestionInfo = responseData.problems
        .map((item: any, idx: number) => {
          if (item.homeworkQuestion.id === newProblemId) {
            let data = {
              id: newProblemId, //현재 문제 아이디
              page: idx, // 현재 문제 번호
              script: item.homeworkQuestion.content, // 문제 자막
              url: item.homeworkQuestion.filePath, // 음성 파일
            };
            return data;
          }
        })
        .filter((value: any) => value !== undefined);

      // 과제 정보
      const initialWorkbookData = {
        id: responseData.problems[0].homeworkQuestion.homeworkId, // 과제 아이디
        title: responseData.problems[0].homeworkQuestion.title, // 과제 title
        pages: responseData.problems.length, // 문제수
      };

      // 서버에 요청 정보 초기값
      // const initialRequestHomeworkInfo = {
      //   homeworkQuestionId: initialQuestionInfo[0].id,
      //   homeworkStudentId: currentHomeworkInfo?.homeworkStudentId,
      //   submitAnswer: '',
      //   voiceFile: undefined,
      // };

      setQuestionData(initialQuestionInfo[0]); // 문제 중복해서 올리지 않게 주의
      setWorkbookData(initialWorkbookData);

      setProblemsData(responseData.problems);
      setSolvedProblemData(responseData.solvedProblem[initialQuestionInfo[0].page]);
      console.log('---------------------------------------------');
      console.log(responseData.solvedProblem[initialQuestionInfo[0].page]);
      console.log('---------------------------------------------');
    }
    const homeworkId = parseInt(paramsObj.homeworkId);
    const problemId = parseInt(paramsObj.problemId);
    fetchData(homeworkId, problemId);
  }, [isSolved]);

  return (
    <div className='w-full h-full flex flex-col'>
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
            {questionData && <ProblemComponent script={questionData.script} url={questionData.url} />}
          </div>

          {/* 문제풀이 - 강사 && 학생 */}
          <div className='relative bg-base-200 rounded-2xl' style={{ gridArea: 'b' }}>
            {/* SolvedComponent - 역할이 강사 || 문제를 푼 경우 , SolvingComponent - 역할이 학생 && 문제를 풀지 않은 경우 */}
            {(userInfo && userInfo.role === 'TEACHER') || isSolved ? <SolvedQuestion solvedProblemData={solvedProblemData} /> : <SolvingQuestion />}
            {userInfo && userInfo.role === 'STUDENT' && !isSolved && !isRecording && !isModalOpen && solvedProblemData && (
              <div className='absolute bottom-5 right-5 w-44 h-12 bg-secondary rounded-md flex justify-center items-center' onClick={submitFileHandler}>
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
                  questionData?.page === 0 && 'invisible'
                } cursor-pointer hover:-translate-x-0.5 hover:scale-105`}
                data-tip={questionData?.page === 0 ? '첫 페이지입니다.' : '이전'}
              >
                <I.LeftBtn btnSize={36} btnColor={'#fff'} />
              </div>
              <div className='text-xl font-bold text-white flex justify-center items-center gap-2 text-center'>
                <div className='h-fit'>{questionData?.page + 1}</div>
                <div className='h-fit'>/</div>
                <div className='h-fit'>{workbookData.pages}</div>
              </div>
              <div
                onClick={goNext}
                className={`tooltip tooltip-bottom tooltip-base-300 ${
                  questionData?.page === workbookData.pages - 1 && 'invisible'
                } cursor-pointer hover/edit:translate-x-0.5 hover:scale-105`}
                data-tip={questionData?.page === workbookData.pages - 1 ? '마지막 페이지입니다.' : '다음'}
              >
                <I.RightBtn btnSize={36} btnColor={'#fff'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakingProblemId;
