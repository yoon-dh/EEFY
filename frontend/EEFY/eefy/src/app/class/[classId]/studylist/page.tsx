'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import Pagination from '@mui/material/Pagination';
import { ChangeEvent } from 'react';

import { getHomeworkView } from '@/api/Class/studylist';

import ContainerBtn from '@/components/Class/StudyList/ContainerBtn';
import SpeakingStudyItem from '@/components/Class/StudyList/SpeakingStudyItem';

import { useRecoilState } from 'recoil';
import { SpeakingStudyListSavePage, StudyListCurrentPage } from '@/recoil/StudyList/pagination';

interface libraryDatasType {
  classHomeworkId: number;
  doneDate: null | Date;
  homeworkStudentId: number;
  memberId: number;
  solvedCount: null | number;
  title: string;
  totalCount: number;
}

function StudyList() {
  const CLASS_ID = useParams();
  const classId = typeof CLASS_ID.classId === 'string' ? parseInt(CLASS_ID.classId) : 0;
  const homeworkType = 'speaking';

  const [libraryDatas, setLibraryDatas] = useState<libraryDatasType[]>([]);
  const [totalPage, setTotalPage] = useState(1);

  const [savePage, setSavePage] = useRecoilState(SpeakingStudyListSavePage); // 저장된 페이지
  const [currentPage, setCurrentPage] = useRecoilState(StudyListCurrentPage); // 현재 페이지

  const [dataExist, setDataExist] = useState(true);

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
      if (typeof CLASS_ID.classId === 'string') {
        const data = {
          classId: parseInt(CLASS_ID.classId),
          page: currentPage - 1,
          size: 5,
          homeworkType: 'SPEAKING',
        };
        const responseData = await getHomeworkView(data);
        const newTotalPage = responseData.pageInfo.totalPageSize;

        setDataExist(!!responseData.homeworks.length);
        setLibraryDatas(responseData.homeworks);
        setTotalPage(newTotalPage);
      }
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
        <ContainerBtn classId={classId} activeTab={'SPEAKING'} />
      </div>
      <div className='w-full h-full relative' style={{ flex: 8, paddingTop: '2%', paddingBottom: '2%' }}>
        {libraryDatas.map((item, idx) => (
          // <Link key={idx} href={`/class/${CLASS_ID.classId}/studylist/${homeworkType}/${item.classHomeworkId}/problem/0`}>
          <SpeakingStudyItem key={idx} libraryData={item} classId={CLASS_ID.classId} homeworkType={homeworkType} />
          // </Link>
        ))}
        {!dataExist && <div>과제가 등록되지 않았습니다.</div>}
      </div>
      <div className='flex justify-center items-center' style={{ flex: 1 }}>
        <Pagination count={totalPage} showFirstButton showLastButton page={currentPage} onChange={handlePageChange} sx={combinedStyles} />
      </div>
    </div>
  );
}

export default StudyList;
