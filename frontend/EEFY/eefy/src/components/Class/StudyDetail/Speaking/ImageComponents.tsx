'use client';
import { MicrophoneTag } from './SpeakinigStyles';

interface MicrophoneBtnProps {
  bgColor: string;
  innerColor: string;
  isActive: boolean;
}

interface DirectionBtnProps {
  btnSize: number;
  btnColor: string;
}

export function MicrophoneBtn({ bgColor, innerColor, isActive }: MicrophoneBtnProps) {
  return (
    <MicrophoneTag $isActive={isActive}>
      <svg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56' fill='none'>
        <circle cx='28' cy='28' r='28' fill={bgColor} />
        <path
          d='M38.2082 25.0835V28.0002C38.2082 30.7076 37.1326 33.3041 35.2182 35.2185C33.3038 37.133 30.7073 38.2085 27.9998 38.2085M27.9998 38.2085C25.2924 38.2085 22.6959 37.133 20.7815 35.2185C18.867 33.3041 17.7915 30.7076 17.7915 28.0002V25.0835M27.9998 38.2085L27.9998 44.0418M22.1665 44.0418H33.8332M27.9998 11.9585C26.8395 11.9585 25.7267 12.4194 24.9062 13.2399C24.0858 14.0604 23.6248 15.1732 23.6248 16.3335V28.0002C23.6248 29.1605 24.0858 30.2733 24.9062 31.0938C25.7267 31.9142 26.8395 32.3752 27.9998 32.3752C29.1602 32.3752 30.273 31.9142 31.0934 31.0938C31.9139 30.2733 32.3748 29.1605 32.3748 28.0002V16.3335C32.3748 15.1732 31.9139 14.0604 31.0934 13.2399C30.273 12.4194 29.1602 11.9585 27.9998 11.9585Z'
          stroke={innerColor}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </MicrophoneTag>
  );
}

export function DownBtn({ btnSize, btnColor }: DirectionBtnProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={btnSize} height={btnSize} viewBox='0 0 24 24' fill='none'>
      <path
        d='M17.8665 4L6.13189 4C3.72857 4 2.22037 6.70123 3.42203 8.85714L6.35261 14.1201L9.29545 19.3831C10.4971 21.539 13.5013 21.539 14.7029 19.3831L17.6458 14.1201L20.5763 8.85714C21.778 6.70123 20.2821 4 17.8665 4Z'
        fill={btnColor}
      />
    </svg>
  );
}

export function LeftBtn({ btnSize, btnColor }: DirectionBtnProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={btnSize} height={btnSize} viewBox='0 0 24 24' fill='none'>
      <path
        d='M20 17.8665L20 6.13189C20 3.72857 17.2988 2.22037 15.1429 3.42203L9.8799 6.35261L4.61693 9.29545C2.46102 10.4971 2.46102 13.5013 4.61693 14.7029L9.8799 17.6458L15.1429 20.5763C17.2988 21.778 20 20.2821 20 17.8665Z'
        fill={btnColor}
      />
    </svg>
  );
}

export function RightBtn({ btnSize, btnColor }: DirectionBtnProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={btnSize} height={btnSize} viewBox='0 0 24 24' fill='none'>
      <path
        d='M4 6.13352V17.8681C4 20.2714 6.70123 21.7796 8.85714 20.578L14.1201 17.6474L19.3831 14.7045C21.539 13.5029 21.539 10.4987 19.3831 9.29708L14.1201 6.35424L8.85714 3.42366C6.70123 2.222 4 3.71794 4 6.13352Z'
        fill={btnColor}
      />
    </svg>
  );
}
