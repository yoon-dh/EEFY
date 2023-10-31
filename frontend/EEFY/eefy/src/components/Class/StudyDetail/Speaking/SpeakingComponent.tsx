import Image from 'next/image';
import AudioPlayer from './AudioPlayer';

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
          <div className='w-full h-full bg-warning overflow-auto text-lg'>{dummyData.script}</div>
          <div className='absolute' style={{ bottom: '5%', right: '5%' }}>
            <AudioPlayer />
          </div>
        </div>
        <div className='bg-base-200 rounded-2xl boxShadow' style={{ gridArea: 'b' }}>
          스피킹 컴포넌트
        </div>
        <div className='relative' style={{ gridArea: 'c' }}>
          <div className=' absolute bottom-0 right-0 w-32 h-auto flex justify-between items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none'>
              <path
                d='M20 17.8665L20 6.13189C20 3.72857 17.2988 2.22037 15.1429 3.42203L9.8799 6.35261L4.61693 9.29545C2.46102 10.4971 2.46102 13.5013 4.61693 14.7029L9.8799 17.6458L15.1429 20.5763C17.2988 21.778 20 20.2821 20 17.8665Z'
                fill='white'
              />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none'>
              <path
                d='M4 6.13352V17.8681C4 20.2714 6.70123 21.7796 8.85714 20.578L14.1201 17.6474L19.3831 14.7045C21.539 13.5029 21.539 10.4987 19.3831 9.29708L14.1201 6.35424L8.85714 3.42366C6.70123 2.222 4 3.71794 4 6.13352Z'
                fill='white'
              />
            </svg>
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
