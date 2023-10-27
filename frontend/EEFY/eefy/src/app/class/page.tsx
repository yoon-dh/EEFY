import StudyBoard from '@/components/Class/StudyBoard';
import RightBoard from '@/components/Class/RightBoard';

function Class() {
  const mainStyle = {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(10, 1fr)',
    gridTemplateAreas:
      "'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top left-top right-bottom right-bottom' 'left-bottom left-bottom left-bottom right-bottom right-bottom' 'left-bottom left-bottom left-bottom right-bottom right-bottom' 'left-bottom left-bottom left-bottom right-bottom right-bottom' 'left-bottom left-bottom left-bottom right-bottom right-bottom'",
  };
  // const mainStyle = {
  //   display: 'grid',
  //   gap: '2rem',
  //   gridTemplateColumns: 'repeat(3, 1fr)',
  //   gridTemplateRows: 'repeat(10, 1fr)',
  //   gridTemplateAreas:
  //     "'left-top left-top right-top' 'left-top left-top right-top' 'left-top left-top right-top' 'left-top left-top right-top' 'left-top left-top left-top right-top right-top' 'left-top left-top right-bottom' 'left-bottom left-bottom right-bottom' 'left-bottom left-bottom right-bottom' 'left-bottom left-bottom right-bottom' 'left-bottom left-bottom right-bottom'",
  // };
  return (
    // padding 이야기해봐야될듯
    <div className='flex w-full h-full rounded-lg'>
      <div className='w-full h-full' style={mainStyle}>
        <div style={{ gridArea: 'left-top' }}>
          <div className='bg-primary'>안녕</div>
        </div>
        <div style={{ gridArea: 'left-bottom' }}>
          <StudyBoard />
        </div>
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
export default Class;

// function Class() {
//   return (
//     // padding 이야기해봐야될듯
//     <div className='flex w-full h-full rounded-lg bg-warning' style={{ width: '98%', padding: '1%' }}>
//       {/* left side */}
//       <div className='flex flex-col bg-primary' style={{ flex: 14 }}>
//         {/* tab bar */}
//         <div className='bg-neutral' style={{ flex: 1 }}>
//           aa
//         </div>
//         {/* visual graph */}
//         <div className='bg-accent' style={{ flex: 6 }}>
//           aa
//         </div>
//         {/* study board */}
//         <div className='bg-neutral' style={{ flex: 5 }}>
//           <StudyBoard />
//         </div>
//       </div>

//       {/* middle col div */}
//       <div style={{ flex: 1 }}></div>

//       {/* right side */}
//       <div className='flex flex-col' style={{ flex: 9 }}>
//         {/* notice board */}
//         <div style={{ flex: 7 }}>
//           <RightBoard contentType={0} />
//         </div>
//         {/* middle raw div */}
//         <div style={{ flex: 1 }}></div>
//         {/* data board */}
//         <div style={{ flex: 7 }}>
//           <RightBoard contentType={1} />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Class;
