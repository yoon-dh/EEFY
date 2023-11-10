'use client';
import Link from 'next/link';
import * as S from './MainClassBox.style';
import { useRecoilState } from 'recoil';
import { EnterClassNumber } from '@/recoil/ClassCreate';

interface MainClassBoxProps {
  classId: number;
  title: string;
  cnt: number;
}

function MainClassBox({ classId, title, cnt }: MainClassBoxProps) {
  const [enterClassNum, setEnterClassNum] = useRecoilState(EnterClassNumber);

  return (
    <Link href='/class/dashboard'>
      <S.ClassBox onClick={() => setEnterClassNum(classId)}>
        {/* 타입에 따라서 이모지 바꿔주기 */}
        <div
          style={{ position: 'absolute', width: '30%', height: '30%', top: '10%', left: '10%', borderRadius: '12px', background: 'rgba(35, 150, 239, 0.41)' }}
        ></div>
        <div style={{ position: 'absolute', bottom: '25%', left: '10%', fontSize: '18px' }}>{title}</div>
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', fontSize: '15px' }}>수강생 : {cnt}명</div>
      </S.ClassBox>
    </Link>
  );
}

export default MainClassBox;
