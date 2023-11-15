'use client';
import Link from 'next/link';
import * as S from './Assign.style';
import { useRecoilState } from 'recoil';
// import { EnterClassNumber } from '@/recoil/ClassCreate';

interface AssignClassBoxProps {
  classId: number;
  title: string;
  cnt: number;
  $isActive: boolean;
}

function AssignClassBox({ classId, title, cnt, $isActive }: AssignClassBoxProps) {
  // const [enterClassNum, setEnterClassNum] = useRecoilState(EnterClassNumber);

  return (
    <S.ClassBox $isActive={$isActive}>
      {/* 타입에 따라서 이모지 바꿔주기 */}
      <div
        style={{
          position: 'absolute',
          width: '30%',
          height: '30%',
          top: '10%',
          left: '10%',
          borderRadius: '12px',
          background: 'rgba(35, 150, 239, 0.41)',
        }}
      ></div>
      <S.ClassBoxTitle className=' break-all' style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', fontSize: '18px' }}>
        {title}
      </S.ClassBoxTitle>
      <div style={{ position: 'absolute', bottom: '10%', left: '10%', fontSize: '15px' }}>수강생 : {cnt}명</div>
    </S.ClassBox>
  );
}

export default AssignClassBox;
