'use client';
import Link from 'next/link';
import { StyledBookContainer, StyledBookCover } from './LibraryList.style';
import { BsInfoSquare } from 'react-icons/bs';
import { CgExport } from 'react-icons/cg';

interface LibraryItemType {
  main: string;
  shadow: string;
  role: string;
  libraryData: {
    content: string;
    createdAt: Date;
    id: number;
    isFinish: boolean;
    memberId: number;
    modifiedAt: Date;
    title: string;
    type: string;
  };
}

function LibraryItem({ main, shadow, role, libraryData }: LibraryItemType) {
  const originalDate = new Date(libraryData.modifiedAt);
  const year = originalDate.getFullYear();
  const month = String(originalDate.getMonth() + 1).padStart(2, '0');
  const day = String(originalDate.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  return (
    <div className='relative flex justify-center items-center' style={{ width: '25%', height: '50%' }}>
      <StyledBookContainer>
        <StyledBookCover
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 157 140'
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          className=''
        >
          <g filter='url(#filter0_d_815_795)'>
            <path
              d='M53 104C53 101.2 53 99.7996 53.545 98.73C54.0243 97.7892 54.7892 97.0243 55.73 96.545C56.7996 96 58.1997 96 61 96H145C147.8 96 149.2 96 150.27 96.545C151.211 97.0243 151.976 97.7892 152.455 98.73C153 99.7996 153 101.2 153 104V111.2C153 118.481 153 122.121 151.583 124.902C150.337 127.348 148.348 129.337 145.902 130.583C143.121 132 139.481 132 132.2 132H61C58.1997 132 56.7996 132 55.73 131.455C54.7892 130.976 54.0243 130.211 53.545 129.27C53 128.2 53 126.8 53 124V104Z'
              fill='#5FD066'
              className='bookmark'
            />
          </g>
          <g filter='url(#filter1_d_815_795)'>
            <rect x='53' y='68' width='100' height='35' rx='5' fill='#E89B2F' className='bookmark' />
          </g>
          <g filter='url(#filter2_d_815_795)'>
            <rect x='53' y='40' width='100' height='35' rx='5' fill='#7DC3DD' className='bookmark' />
          </g>
          <g filter='url(#filter3_d_815_795)'>
            <path
              d='M53 23C53 20.1997 53 18.7996 53.545 17.73C54.0243 16.7892 54.7892 16.0243 55.73 15.545C56.7996 15 58.1997 15 61 15H138.6C143.64 15 146.161 15 148.086 15.9809C149.779 16.8438 151.156 18.2206 152.019 19.9141C153 21.8393 153 24.3595 153 29.4V42C153 44.8003 153 46.2004 152.455 47.27C151.976 48.2108 151.211 48.9757 150.27 49.455C149.2 50 147.8 50 145 50H61C58.1997 50 56.7996 50 55.73 49.455C54.7892 48.9757 54.0243 48.2108 53.545 47.27C53 46.2004 53 44.8003 53 42V23Z'
              fill='#C8C6BA'
              className='bookmark'
            />
          </g>
          <g filter='url(#filter4_i_815_795)'>
            <rect width='144' height='144' rx='25' fill={main} />
          </g>
          <g filter='url(#filter5_i_815_795)'>
            <rect width='144' height='144' rx='25' fill='#000' className='overlay' />
          </g>
          <g filter='url(#filter6_f_815_795)'>
            <path d='M11 12L11 136' stroke={shadow} stroke-width='2' className='bookline' />
          </g>
          <defs>
            <filter id='filter0_d_815_795' x='49' y='96' width='108' height='44' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_815_795' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_815_795' result='shape' />
            </filter>
            <filter id='filter1_d_815_795' x='49' y='68' width='108' height='43' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_815_795' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_815_795' result='shape' />
            </filter>
            <filter id='filter2_d_815_795' x='49' y='40' width='108' height='43' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_815_795' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_815_795' result='shape' />
            </filter>
            <filter id='filter3_d_815_795' x='49' y='15' width='108' height='43' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_815_795' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_815_795' result='shape' />
            </filter>
            <filter id='filter4_i_815_795' x='0' y='0' width='144' height='148' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
              <feColorMatrix type='matrix' values='0 0 0 0 0.9375 0 0 0 0 0.902344 0 0 0 0 0.902344 0 0 0 0.25 0' />
              <feBlend mode='normal' in2='shape' result='effect1_innerShadow_815_795' />
            </filter>
            <filter id='filter5_i_815_795' x='0' y='0' width='144' height='148' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
              <feColorMatrix type='matrix' values='0 0 0 0 0.9375 0 0 0 0 0.902344 0 0 0 0 0.902344 0 0 0 0.25 0' />
              <feBlend mode='normal' in2='shape' result='effect1_innerShadow_815_795' />
            </filter>
            <filter id='filter6_f_815_795' x='6' y='8' width='10' height='132' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur_815_795' />
            </filter>
          </defs>
        </StyledBookCover>
        <div className='content'>
          <div className='absolute text-neutral font-bold' style={{ fontSize: '16px', top: '25%', left: '12%', right: '15%', bottom: '50%' }}>
            {libraryData.title}
          </div>
          <div className='absolute text-md text-neutral font-bold' style={{ right: '20%', bottom: '15%' }}>
            {/* {formattedDate} */}
            20 문항
          </div>
        </div>
        <div
          className='content-focus absolute w-full text-[#d0d0d6] flex flex-col justify-center items-center gap-8'
          style={{ fontSize: '17px', top: '50%', left: '45%', transform: 'translate(-50%, -50%)' }}
        >
          <div className='flex justify-center items-center gap-5 hover:text-[#f5f5fb]'>
            <BsInfoSquare className='text-2xl' />
            <p>자료 정보</p>
          </div>
          {role === 'teacher' && (
            <Link href={`/main/library/homework/assign/${libraryData.id}`}>
              <div className='flex justify-center items-center gap-5 hover:text-[#f5f5fb]'>
                <CgExport className='text-2xl' />
                <p>과제 등록</p>
              </div>
            </Link>
          )}
        </div>
      </StyledBookContainer>
    </div>
  );
}

export default LibraryItem;
