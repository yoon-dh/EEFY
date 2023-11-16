'use client';
import AudioPlayer from './AudioPlayer';

interface PropsType {
  script: string;
  url: any;
}

function ProblemComponent({ script, url }: PropsType) {
  console.log(url);
  return (
    <>
      <div className='absolute overflow-auto no-scrollbar text-xl' style={{ top: '10%', bottom: '35%', left: '2%', right: '2%' }}>
        {script}
      </div>
      <div className='absolute h-fit' style={{ bottom: '5%', right: '2%' }}>
        <AudioPlayer url={url} />
      </div>
    </>
  );
}

export default ProblemComponent;
