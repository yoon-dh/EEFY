'use client';
import Pagination from '@mui/material/Pagination';
import { ChangeEvent } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';
import { PaginationAtom } from '@/recoil/Library/LibraryAtom';
import { Thema } from '@/recoil/Thema';

function PaginationComponent() {
  const [page, setPage] = useRecoilState(PaginationAtom);
  const themecolor = useRecoilValue(Thema);

  const handlePageChange = (event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
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
  return <Pagination count={10} showFirstButton showLastButton page={page} onChange={handlePageChange} sx={combinedStyles} />;
}

export default PaginationComponent;
