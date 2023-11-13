'use client';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { AllListPaginationAtom } from '@/recoil/Library/LibraryAtom';

import ContainerBtn from '@/components/Main/Library/LibraryList/ContainerBtn';
import PaginationComponent from '@/components/Main/Library/LibraryList/PaginationComponent';
import LibraryListComponent from '@/components/Main/Library/LibraryList/LibraryListComponent';

import * as S from '@/styles/MainStyle.style';

interface dataType {
  homeworkId: number;
  type: string;
  title: string;
  count: number;
}

function LibraryListeningList() {
  const [paginationAtom, setPaginationAtom] = useRecoilState(AllListPaginationAtom);
  const [libraryDatas, setLibraryDatas] = useState<dataType[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const size = 7;
      // 서버 요청 -> 현재 페이지, 타입 (없으면 전체), size (학생은 8, 선생은 7)
      const responseData = {
        data: [
          {
            homeworkId: 7,
            type: 'LISTENING',
            title: 'TOEIC 필수 Listening-part1',
            count: 20,
          },
        ],
        totalCount: 10,
      };
      const newTotalPage = responseData.totalCount % size === 0 ? Math.floor(responseData.totalCount / size) : Math.floor(responseData.totalCount / size) + 1;
      setLibraryDatas(responseData.data);
      setPaginationAtom(prev => ({ ...prev, totalPage: newTotalPage }));
    }
    fetchData();
  }, [paginationAtom.requestPage]);

  return (
    <div className='w-full h-full flex flex-col'>
      <div style={{ flex: 1 }}>
        <ContainerBtn role={'student'} activeTab={4} />
      </div>
      <S.MainContainer className='flex flex-col' style={{ flex: 9 }}>
        <div style={{ flex: 8 }}>
          <LibraryListComponent role={'student'} libraryDatas={libraryDatas} />
        </div>
        <div className='flex justify-center items-center' style={{ flex: 1 }}>
          <PaginationComponent totalPage={paginationAtom.totalPage} />
        </div>
      </S.MainContainer>
    </div>
  );
}

export default LibraryListeningList;
