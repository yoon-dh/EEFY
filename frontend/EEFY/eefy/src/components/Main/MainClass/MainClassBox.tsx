'use client';
import Link from 'next/link';
import * as S from './MainClassBox.style';
import { useRecoilState } from 'recoil';
// import { EnterClassNumber } from '@/recoil/ClassCreate';
import { EnterClassTitle } from '@/recoil/ClassCreate';

interface MainClassBoxProps {
  classId: number;
  title: string;
  cnt: number;
}

function MainClassBox({ classId, title, cnt }: MainClassBoxProps) {
  // const [enterClassNum, setEnterClassNum] = useRecoilState(EnterClassNumber);
  const [enterClassTitle, setEnterclassTitle] = useRecoilState(EnterClassTitle);

  return (
    <Link href={`/class/${classId}/dashboard`}>
      <div style={{ position: 'relative' }} onClick={() => setEnterclassTitle(title)}>
        <S.ClassBox xmlns='http://www.w3.org/2000/svg' width='193' height='185' viewBox='0 0 193 185' fill='none'>
          <g filter='url(#filter0_i_930_1022)'>
            <rect x='4' width='185' height='185' rx='25' fill='#2F8F46' />
          </g>
          <g filter='url(#filter1_dd_930_1022)'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M4.375 23.125H188.616C188.263 19.185 187.583 16.2259 186.271 13.6502C183.874 8.94619 180.049 5.12167 175.345 2.72484C169.997 0 162.997 0 148.995 0H43.9955C29.9942 0 22.9935 0 17.6457 2.72484C12.9417 5.12167 9.11714 8.94619 6.7203 13.6502C5.40793 16.2259 4.72764 19.185 4.375 23.125Z'
              fill='#C36B4F'
            />
          </g>
          <g filter='url(#filter2_d_930_1022)'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M188.621 160.59L4.38016 160.59C4.73281 164.53 5.41309 167.489 6.72547 170.065C9.1223 174.769 12.9468 178.594 17.6509 180.99C22.9987 183.715 29.9993 183.715 44.0006 183.715L149.001 183.715C163.002 183.715 170.003 183.715 175.35 180.99C180.054 178.594 183.879 174.769 186.276 170.065C187.588 167.489 188.268 164.53 188.621 160.59Z'
              fill='#C36B4F'
            />
          </g>
          <path
            d='M125.406 155.451C125.406 155.322 125.406 155.258 125.407 155.203C125.466 152.527 127.621 150.372 130.297 150.314C130.352 150.312 130.416 150.312 130.545 150.312H176.612C180.261 150.312 183.219 153.271 183.219 156.92V156.92C183.219 158.947 181.575 160.59 179.548 160.59H130.545C130.416 160.59 130.352 160.59 130.297 160.589C127.621 160.531 125.466 158.375 125.407 155.699C125.406 155.645 125.406 155.58 125.406 155.451V155.451Z'
            fill='#FEF9F3'
          />
          <defs>
            <filter id='filter0_i_930_1022' x='4' y='0' width='185' height='189' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
              <feColorMatrix type='matrix' values='0 0 0 0 0.9375 0 0 0 0 0.902344 0 0 0 0 0.902344 0 0 0 0.25 0' />
              <feBlend mode='normal' in2='shape' result='effect1_innerShadow_930_1022' />
            </filter>
            <filter id='filter1_dd_930_1022' x='0.375' y='0' width='192.24' height='32.125' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
              <feOffset dy='1' />
              <feColorMatrix type='matrix' values='0 0 0 0 0.770833 0 0 0 0 0.486094 0 0 0 0 0.0867187 0 0 0 1 0' />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_930_1022' />
              <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
              <feOffset dy='5' />
              <feGaussianBlur stdDeviation='2' />
              <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0' />
              <feBlend mode='normal' in2='effect1_dropShadow_930_1022' result='effect2_dropShadow_930_1022' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_930_1022' result='shape' />
            </filter>
            <filter
              id='filter2_d_930_1022'
              x='4.38086'
              y='160.59'
              width='184.24'
              height='24.125'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
              <feOffset dy='1' />
              <feColorMatrix type='matrix' values='0 0 0 0 0.770833 0 0 0 0 0.486094 0 0 0 0 0.0867187 0 0 0 1 0' />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_930_1022' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_930_1022' result='shape' />
            </filter>
          </defs>
        </S.ClassBox>
        <S.chalkTag style={{ position: 'absolute', bottom: '35%', left: '10%', fontSize: '18px' }}>{title}</S.chalkTag>
        <S.chalkTag style={{ position: 'absolute', bottom: '20%', left: '10%', fontSize: '15px' }}>수강생 : {cnt}명</S.chalkTag>
      </div>
    </Link>
  );
}

export default MainClassBox;

// <S.ClassBox onClick={() => setEnterclassTitle(title)}>

// </S.ClassBox>
