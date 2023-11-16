'use client';
import { useEffect, useState, ChangeEvent } from 'react';
import Link from 'next/link';
import Pagination from '@mui/material/Pagination';
import { getHomework, getProblem } from '@/api/Homework/Problem';
import { useParams, useRouter } from 'next/navigation';

import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { HomeworkIds, Problems, SolvedProblem } from '@/recoil/Homework';
import ContainerBtn from '@/components/Class/StudyList/ContainerBtn';
import SpeakingStudyItem from '@/components/Class/StudyList/SpeakingStudyItem';
import { ReadingStudyListSavePage, StudyListCurrentPage } from '@/recoil/StudyList/pagination';

interface libraryDatasType {
  classHomeworkId: number;
  doneDate: null | Date;
  homeworkStudentId: number;
  memberId: number;
  solvedCount: null | number;
  title: string;
  totalCount: number;
}

function HomeworkTest() {
  const params = useParams();
  const router = useRouter();
  const classId = params.classId;
  const [HomeworIdData, setHomeworkIdData] = useRecoilState(HomeworkIds);
  const [problem, setProblem] = useRecoilState(Problems);
  const [solvedProblem, setSolvedProblem] = useRecoilState(SolvedProblem);
  const [libraryDatas, setLibraryDatas] = useState<libraryDatasType[]>([]);
  const [totalPage, setTotalPage] = useState(1);

  const [savePage, setSavePage] = useRecoilState(ReadingStudyListSavePage); // 저장된 페이지
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
    if (currentPage !== savePage) {
      setCurrentPage(savePage);
    } else {
      CallHomework();
    }
  }, [currentPage]);

  // 과제 불러오기
  const CallHomework = async () => {
    const data = {
      classId: classId,
      page: currentPage - 1,
      size: 5,
      homeworkType: 'READING',
    };
    const res = await getHomework(data);
    console.log(res);
    if (res?.status === 200) {
      const newTotalPage = res?.data.pageInfo.totalPageSize;
      setDataExist(!!res.data.homeworks.length);
      setLibraryDatas(res.data.homeworks);
      setTotalPage(newTotalPage);
    }
  };

  const hanbleClick = async (StudentId: number, HomeworkId: number, title:String) => {
    console.log(StudentId, HomeworkId);
    const Ids = {
      homeworkStudentId: StudentId,
      classHomeworkId: HomeworkId,
      title: title,
    };
    const res = await getProblem(HomeworkId);
    console.log(res);
    if (res?.status == 200) {
      setHomeworkIdData(Ids);
      setProblem(res?.data.problems);
      setSolvedProblem(res?.data.solvedProblem);
      router.push(`/class/${classId}/studylist/reading/${HomeworkId}/problem/1`);
    }
  };

  return (
    <div className='w-full h-full flex flex-col'>
      <div style={{ flex: 1 }}>
        <ContainerBtn classId={Number(classId)} activeTab={'READING'} />
      </div>
      <div className='w-full h-full relative' style={{ flex: 9, paddingTop: '2%', paddingBottom: '2%', border:'1px solid black' }}>
        {libraryDatas.map((item:any, idx) => (
          <div key={idx} onClick={()=>hanbleClick(item.homeworkStudentId, item.classHomeworkId, item.title)}>
             <SpeakingStudyItem key={idx} libraryData={item} classId={classId} homeworkType={'READING'} />
          </div>
        ))}
        {libraryDatas.length===0 && <div>과제가 등록되지 않았습니다.</div>}
      </div>
      <div className='flex justify-center items-center' style={{ flex: 1 }}>
        <Pagination count={totalPage} showFirstButton showLastButton page={currentPage} onChange={handlePageChange} sx={combinedStyles} />
      </div>
    </div>
  );
}
export default HomeworkTest;

