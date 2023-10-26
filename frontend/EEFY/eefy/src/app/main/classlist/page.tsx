'use client';

import MainClassBox from '@/components/Main/MainClass/MainClassBox';
import * as S from '@/components/Main/MainClass/MainClassBox.style';
import { HiPlus } from 'react-icons/hi';

function ClassList() {
  const dummyClass = [];

  return (
    <div className=' w-full h-full' style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontSize: '28px', flex: '1.5', display: 'flex', alignItems: 'center' }}>
        운영 중인 클래스 <span style={{ color: '#4f4d4d81' }}>(4)</span>
      </div>
      <div style={{ flex: '8.5', display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        {/* 강사면 보이고 아니면 안보이게 */}
        <S.ClassBox style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
          <div style={{ fontSize: '40px' }}>
            <HiPlus />
          </div>
          <div className='prim' style={{ fontSize: '20px' }}>
            클래스 개설
          </div>
        </S.ClassBox>
      </div>
    </div>
  );
}

export default ClassList;
