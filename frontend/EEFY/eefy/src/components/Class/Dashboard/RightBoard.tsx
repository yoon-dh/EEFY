import Link from 'next/link';
import * as S from '../../../styles/MainStyle.style';
import { useParams } from 'next/navigation';

type BoardProps = {
  contentType: number;
};

function RightBoard({ contentType }: BoardProps) {
  const CLASS_ID = useParams();
  const title = ['공지사항', '등록자료'];

  // 서버에 요청 필요
  const data = [
    { title: '10/27일 수업 없습니다.', date: '23/10/25' },
    { title: '과제 참여율이 저조합니다.', date: '23/10/25' },
    { title: '당부 말씀 드립니다.', date: '23/10/25' },
    { title: '9월 Best Member 선정', date: '23/10/25' },
  ];
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
          <Link
            href={contentType === 0 ? `/class/${CLASS_ID?.classId}/notice` : `/class/${CLASS_ID?.classId}/lecture`}
            className='text-info'
            style={{ fontSize: '20px' }}
          >
            View all
          </Link>
        </div>

        {/* 게시글 목록 */}
        {data.map((item, idx) => (
          <div key={idx} className='flex justify-between items-center text-base' style={{ flex: 1 }}>
            <div style={{ flex: 1 }}>
              <div className='bg-success' style={{ width: '8px', height: '8px', borderRadius: '50%' }}></div>
            </div>
            <div style={{ flex: 10 }}>{item.title}</div>
            <div className='text-right' style={{ flex: 5 }}>
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </S.MainContainer>
  );
}

export default RightBoard;
