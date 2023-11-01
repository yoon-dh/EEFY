import Image from 'next/image';
import RecordingComponent from './RecordingComponent';
import AudioPlayer from './AudioPlayer';
import * as I from './ImageComponents';

const dummyData = {
  script:
    "The vast expanse of the Grand Canyon in Arizona, USA, is a sight to behold. Carved by the Colorado River over millions of years, the canyon's layered red rock formations tell a geological story that stretches back eons. Visitors from around the world come to admire its breathtaking beauty and hike its rugged trails, offering a deep connection with nature and a profound sense of wonder.",
};

function SpeakingComponent() {
  const mainStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)',
    gridTemplateAreas: "'a' 'a' 'a' 'a' 'b' 'b' 'b' 'b' 'c' ",
    gap: '3%',
  };

  return (
    <div
      className='relative w-full h-full rounded-3xl boxShadow'
      style={{ background: 'linear-gradient(99deg, rgba(153, 155, 213, 0.50) 53.12%, rgba(79, 72, 155, 0.50) 155.43%)', padding: '2%' }}
    >
      <div className='w-full h-full' style={mainStyle}>
        <div className='relative bg-base-200 rounded-2xl boxShadow' style={{ gridArea: 'a', padding: '2%' }}>
          <div className='w-full h-full overflow-auto text-xl'>{dummyData.script}</div>
          <div className='absolute' style={{ bottom: '5%', right: '2%' }}>
            <AudioPlayer />
          </div>
        </div>
        <div className='relative bg-base-200 rounded-2xl boxShadow' style={{ gridArea: 'b', padding: '2%' }}>
          <RecordingComponent />
        </div>
        {/* 문제 이동 버튼 */}
        <div className='relative' style={{ gridArea: 'c' }}>
          <div className=' absolute bottom-0 right-0 w-32 h-auto flex justify-between items-center'>
            <I.LeftBtn btnSize={40} btnColor={'white'} />
            <I.RightBtn btnSize={40} btnColor={'white'} />
          </div>
        </div>
      </div>

      {/* 이미지 */}
      <div className='absolute bottom-0 left-0'>
        <Image src={'/asset-headphonebook-450x450.png'} alt='headphone' width={200} height={200} />
      </div>
    </div>
  );
}

export default SpeakingComponent;
