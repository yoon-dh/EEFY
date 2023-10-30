import Image from 'next/image';

function StudentTable() {
  // 학생 프로필, 이름,  과제, 질의응답
  // 상세 : 이메일, 과제, 시험, 최근 접속 이력
  const dummyData = [
    {
      profile: '/logo.png',
      name: 'Hart Hagerty',
      statistics: '27/28',
      questions: 0,
    },
    {
      profile: '/logo.png',
      name: 'Brice Swyre',
      statistics: '27/28',
      questions: 0,
    },
    {
      profile: '/logo.png',
      name: 'Marjy Ferencz',
      statistics: '27/28',
      questions: 0,
    },
    {
      profile: '/logo.png',
      name: 'Yancy Tear',
      statistics: '27/28',
      questions: 0,
    },
    {
      profile: '/logo.png',
      name: 'Yancy Tear',
      statistics: '27/28',
      questions: 0,
    },
    {
      profile: '/logo.png',
      name: 'Yancy Tear',
      statistics: '27/28',
      questions: 0,
    },
    {
      profile: '/logo.png',
      name: 'Yancy Tear',
      statistics: '27/28',
      questions: 0,
    },
    {
      profile: '/logo.png',
      name: 'Yancy Tear',
      statistics: '27/28',
      questions: 0,
    },
  ];
  // <img style={{ margin: 'auto', filter: 'drop-shadow(3px 3px 3px #808080)' }} src={`/logo.png`} />;
  const ImgUrl = '/logo.png';
  return (
    <div className='w-full h-full overflow-auto no-scrollbar'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type='checkbox' className='checkbox' />
              </label>
            </th>
            <th>이름</th>
            <th>학습 이력 현황</th>
            <th>질의 응답</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item, idx) => (
            <tr key={idx}>
              <th>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <td>
                <div className='flex items-center space-x-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12 bg-primary'>
                      <Image src={item.profile} alt='Avatar Tailwind CSS Component' width={250} height={250} />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>{item.name}</div>
                    <div className='text-sm opacity-50'>3rd</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className='badge badge-ghost badge-sm'>Desktop Support Technician</span>
              </td>
              <td>Purple</td>
              <th>
                <button className='btn btn-ghost btn-xs'>details</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
