'use client';
import Link from 'next/link';
import * as S from '../../../styles/MainStyle.style';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { Name } from '@/recoil/Notice';
import { useEffect, useState } from 'react';
import { getStudyClassNotice } from '@/api/Class/studyclass';
import { getLectureList } from '@/api/Lecture/Lecture';
import { getNoticeList } from '@/api/Notice/Notice';

type BoardProps = {
  contentType: number;
};

type studyDataType = {
  id: number;
  title: string;
  createdAt: any;
  modifiedAt: any;
};

function RightBoard({ contentType }: BoardProps) {
  const CLASS_ID = useParams();
  const title = ['공지사항', '등록자료'];

  const [nameAtom, setNameAtom] = useRecoilState(Name);

  // 서버에 요청 필요
  // const data = [
  //   { title: '10/27일 수업 없습니다.', date: '23/10/25' },
  //   { title: '과제 참여율이 저조합니다.', date: '23/10/25' },
  //   { title: '당부 말씀 드립니다.', date: '23/10/25' },
  //   { title: '9월 Best Member 선정', date: '23/10/25' },
  // ];

  const [data, setData] = useState<any>([]);

  const nameAtomHandler = () => {
    if (contentType === 0) {
      setNameAtom('notice');
    } else if (contentType === 1) {
      setNameAtom('lecture');
    }
  };

  function dateFormat(createDate: Date): string {
    const currentTime = new Date();
    const elapsedMilliseconds = currentTime.getTime() - new Date(createDate).getTime();
    const elapsedMinutes = Math.floor(elapsedMilliseconds / 1000 / 60);

    if (elapsedMinutes < 1) {
      return '방금 전';
    } else if (elapsedMinutes < 60) {
      return `${elapsedMinutes}분 전`;
    } else if (elapsedMinutes < 1440) {
      const elapsedHours = Math.floor(elapsedMinutes / 60);
      return `${elapsedHours}시간 전`;
    } else {
      const elapsedDays = Math.floor(elapsedMinutes / 1440);
      return `${elapsedDays}일 전`;
    }
  }

  useEffect(() => {
    const classId = CLASS_ID.classId;
    async function fetchData() {
      if (typeof classId === 'string' && contentType === 0) {
        const noticeData = await getStudyClassNotice(Number(classId));
        setData(noticeData);
      } else if (typeof classId === 'string' && contentType === 1) {
        const lectureData = await getLectureList(Number(classId));
        const newLectureData = lectureData?.data;
        setData(newLectureData);
      }
    }
    fetchData();
  }, []);

  return (
    <S.MainContainer className='w-full h-full'>
      <div
        className='h-full flex flex-col rounded-xl min-w-[370px] min-h-[230px] '
        style={{
          padding: '5% 3%',
        }}
      >
        {/* 제목 */}
        <div className='flex justify-between text-xl font-bold 2xl:text-2xl' style={{ flex: 2 }}>
          <div>{title[contentType]}</div>
          <div onClick={nameAtomHandler}>
            <Link
              href={contentType === 0 ? `/class/${CLASS_ID?.classId}/notice` : `/class/${CLASS_ID?.classId}/lecture`}
              className='text-info'
              style={{ fontSize: '20px' }}
            >
              View all
            </Link>
          </div>
        </div>

        {/* 게시글 목록 */}
        {data !== undefined && data?.length !== 0 ? (
          <>
            {data?.map((item: any, idx: number) => (
              <div key={idx} className='flex justify-between items-center text-base' style={{ flex: 1 }}>
                <div style={{ flex: 1 }}>
                  <div className='bg-success' style={{ width: '8px', height: '8px', borderRadius: '50%' }}></div>
                </div>
                <div style={{ flex: 10 }}>{item?.title}</div>
                <div className='text-right' style={{ flex: 5 }}>
                  {dateFormat(item?.createdAt)}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className='w-full h-full flex justify-center items-center'>
            {contentType === 0 ? <p>등록된 공지사항이 없습니다.</p> : <p>등록된 등록자료가 없습니다.</p>}
          </div>
        )}
      </div>
    </S.MainContainer>
  );
}

export default RightBoard;
