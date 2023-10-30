'use client';
// Student
import TabsComponents from '@/components/Class/Dashboard/TabsComponent';
import StudyBoard from '@/components/Class/Dashboard/StudyBoard';
import RightBoard from '@/components/Class/Dashboard/RightBoard';

// Teacher
import StudentTable from '@/components/Class/Dashboard/StudentTable';

// Recoil
import { useRecoilValue } from 'recoil';
import { UserType } from '@/recoil/UserInfo';

function Dashboard() {
  const userType = useRecoilValue(UserType);
  let gridTemplateAreas =
    userType == 1
      ? "'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-bottom right-bottom' 'left-top left-top left-top right-bottom right-bottom' 'left-top left-top left-top right-bottom right-bottom' 'left-top left-top left-top right-bottom right-bottom' 'left-top left-top left-top right-bottom right-bottom'"
      : "'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-bottom right-bottom' 'left-bottom left-bottom left-bottom right-bottom right-bottom' 'left-bottom left-bottom left-bottom right-bottom right-bottom' 'left-bottom left-bottom left-bottom right-bottom right-bottom' 'left-bottom left-bottom left-bottom right-bottom right-bottom'";

  const mainStyle = {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(10, 1fr)',
    gridTemplateAreas: gridTemplateAreas,
  };

  return (
    <div className='flex w-full h-full rounded-lg'>
      <div className='w-full h-full' style={mainStyle}>
        {userType == 1 ? (
          <>
            <div style={{ gridArea: 'left-top' }}>
              <StudentTable />
            </div>
          </>
        ) : (
          <>
            <div style={{ gridArea: 'left-top' }}>
              <TabsComponents />
            </div>
            <div style={{ gridArea: 'left-bottom' }}>
              <StudyBoard />
            </div>
          </>
        )}
        <div style={{ gridArea: 'right-top' }}>
          <RightBoard contentType={0} />
        </div>
        <div style={{ gridArea: 'right-bottom' }}>
          <RightBoard contentType={1} />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

// student랑 강사 페이지 나눠서 만들까, 변수로 구분할 까
// 변수로 구분하는 것의 장점 -> 페이지 수가 줄어듬
// 페이지로 구분하는 것의 장점 -> 유지보수 쉬움
