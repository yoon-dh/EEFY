'use client';
import ContainerBtn from '@/components/Lecture/ContainerBtn';
import Note from "@/components/Notice/Note/Note";
import { useRecoilValue } from 'recoil';
import { OcrFileCheck } from '@/recoil/Homework';
import CanvasModal from '@/components/Lecture/LectureDetail/CanvasModal';

function Home() {
  const ocr = useRecoilValue(OcrFileCheck)
  return (
    <div className='w-full h-full'>
      {!ocr.isSuccess ? (
        <>
        <div>
          <ContainerBtn />
        </div>
        <div style={{
          position:'relative',
          top:'10px',
          height:'89%', 
        }}>
          <Note/>
        </div>
        </>
      ) : (
        <CanvasModal/>
      )}
    </div>
  );
}

export default Home;
