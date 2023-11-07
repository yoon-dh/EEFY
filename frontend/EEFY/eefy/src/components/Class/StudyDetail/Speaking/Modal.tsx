import AudioPlayer from './AudioPlayer';

import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { WorkbookInfo, RecordAudioUrl, StudentQuestionInfo, IsModalOpen, IsSolved } from '@/recoil/StudyDetails/SpeakDetails';

function Modal() {
  const workbookData = useRecoilValue(WorkbookInfo); // 문제집 정보
  const recordAudioUrl = useRecoilValue(RecordAudioUrl);
  const [studentQuestionData, setStudentQuestionData] = useRecoilState(StudentQuestionInfo);
  const setIsModalOpen = useSetRecoilState(IsModalOpen);
  const setIsSolved = useSetRecoilState(IsSolved);

  const cancleHandler = () => {
    setIsModalOpen(false);
  };

  const submitHandler = () => {
    // 서버로 정보 요청 workbookData.id : 문제집 번호 아이디, studentQuestionData.id : 문제 번호 아이디, recordAudioUrl : url

    // 받은 데이터를 토대로 학생 정보 수정 - url,
    // setStudentQuestionData()

    // 모달창 닫기
    setIsModalOpen(false);

    // IsSolved 변경
    setIsSolved(true);
  };

  return (
    <div className='absolute flex flex-col justify-between bg-base-300 boxShadow' style={{ top: '5%', bottom: '5%', left: '30%', right: '30%', padding: '1%' }}>
      <div className='flex flex-col gap-2'>
        <div className='text-xl font-bold text-[#6D79E2]'>녹음된 파일을 제출하시겠습니까?</div>
        <div className='text-sm'>제출 시 이전 녹음파일은 사라집니다.</div>
      </div>
      <AudioPlayer url={recordAudioUrl} />
      <div className='flex text-lg justify-end gap-5'>
        <button className='w-28 h-10 font-bold text-success boxShadow hover:scale-110' onClick={cancleHandler}>
          취소
        </button>
        <button className='w-28 h-10 font-bold text-error boxShadow hover:scale-110' onClick={submitHandler}>
          제출
        </button>
      </div>
    </div>
  );
}

export default Modal;
