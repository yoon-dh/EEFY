'use client';
import { useEffect, useState } from 'react';

import Pagination from '@mui/material/Pagination';
import { ChangeEvent } from 'react';

import { useRecoilState } from 'recoil';
import { CurrentPage, AllListSavePage } from '@/recoil/Library/LibraryAtom';

import ContainerBtn from '@/components/Main/Library/LibraryList/ContainerBtn';
import LibraryListComponent from '@/components/Main/Library/LibraryList/LibraryListComponent';

import { getHomeworkList } from '@/api/Library/LibraryListApi';

import * as S from '@/styles/MainStyle.style';

interface dataType {
  content: string;
  createdAt: Date;
  id: number;
  isFinish: boolean;
  memberId: number;
  modifiedAt: Date;
  title: string;
  type: string;
}

function LibraryAllList() {
  const [libraryDatas, setLibraryDatas] = useState<dataType[] | null>(null);
  const [totalPage, setTotalPage] = useState(1);

  const [savePage, setSavePage] = useRecoilState(AllListSavePage);
  const [currentPage, setCurrentPage] = useRecoilState(CurrentPage);

  const handlePageChange = (event: ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
    setSavePage(newPage);
  };

  const paginationStyle = {
    '& .MuiPagination-ul .MuiPaginationItem-root.Mui-selected': {
      backgroundColor: '#F4F5FA', // 선택된 페이지 배경색을 연보라색으로 변경
    },
    '& .MuiPagination-ul .MuiPaginationItem-root.Mui-selected:hover': {
      backgroundColor: '#F4F5FA', // 선택된 페이지 호버 시 배경색도 연보라색으로 변경
    },
    '& .MuiPagination-ul .MuiPaginationItem-root.MuiPaginationItem-page:hover': {
      backgroundColor: '#F4F5FA', // 페이지 호버 시 배경색도 연보라색으로 변경
    },
  };

  const combinedStyles = {
    ...paginationStyle, // paginationStyle 객체
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  useEffect(() => {
    async function fetchData(page: number) {
      const size = 8;

      const data = {
        page: page - 1,
        size: size,
      };
      const responseData = await getHomeworkList(data);
      const newTotalPage = responseData.pageInfo.totalPageSize;
      setLibraryDatas(responseData.homeworkDtos);
      setTotalPage(newTotalPage);
    }

    if (currentPage !== savePage) {
      setCurrentPage(savePage);
    } else {
      fetchData(currentPage);
    }
  }, [currentPage]);

  return (
    <div className='w-full h-full flex flex-col'>
      <div style={{ flex: 1 }}>
        <ContainerBtn role={'student'} activeTab={1} />
      </div>
      <S.MainContainer className='flex flex-col' style={{ flex: 9 }}>
        <div style={{ flex: 8 }}>
          <LibraryListComponent role={'student'} libraryDatas={libraryDatas} />
        </div>
        <div className='flex justify-center items-center' style={{ flex: 1 }}>
          <Pagination count={totalPage} showFirstButton showLastButton page={currentPage} onChange={handlePageChange} sx={combinedStyles} />
        </div>
      </S.MainContainer>
    </div>
  );
}

export default LibraryAllList;
