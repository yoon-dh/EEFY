'use client';
import Link from 'next/link';
import * as S from './MainClassBox.style';

interface MainClassBoxProps {
  title: string;
  cnt: number;
}

function MainClassBox({ title, cnt }: MainClassBoxProps) {
  return (
    <Link href='/class/dashboard'>
      <S.ClassBox>
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
