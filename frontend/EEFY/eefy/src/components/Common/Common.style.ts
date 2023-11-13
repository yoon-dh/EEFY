import styled, { css, keyframes } from 'styled-components';

interface themeType {
  $theme: string;
}

const gradientAnimation = keyframes`
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
`;

export const BackgroundContainer = styled.div<themeType>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
  ${props =>
    props.$theme === 'winter'
      ? css`
          /* background: linear-gradient(90deg, rgba(224, 188, 243, 0.7) 0%, rgba(126, 231, 238, 0.7) 100%); */
          background: rgba(255, 255, 255);
        `
      : css`
          background: rgba(29, 35, 42);
        `}
  /* background-size: 400% 400%; */
  background-attachment: fixed;
  z-index: -1;
`;

const waveAnimation = keyframes`
  2% {
      transform: translateX(1);
  }

  25% {
      transform: translateX(-25%);
  }

  50% {
      transform: translateX(-50%);
  }

  75% {
      transform: translateX(-25%);
  }

  100% {
      transform: translateX(1);
  }
`;

const Wave = styled.div`
  background: rgb(255 255 255 / 25%);
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 10em;
  transform: translate3d(0, 0, 0);
  left: 0;
  z-index: -1;
`;

export const Wave1 = styled(Wave)`
  bottom: 0;
  /* background: linear-gradient(315deg, rgba(214, 200, 222, 0.6) 3%, rgba(167, 152, 214, 0.6) 38%, rgba(152, 171, 214, 0.6) 68%, rgba(152, 201, 214, 0.6) 98%); */
  animation: ${waveAnimation} 30s -3s linear infinite;
  opacity: 0.8;
`;

export const Wave2 = styled(Wave)`
  bottom: -1.25em;
  animation: ${waveAnimation} 18s linear reverse infinite;
  opacity: 0.9;
`;

export const Wave3 = styled(Wave)`
  bottom: -2.5em;
  animation: ${waveAnimation} 20s -1s reverse infinite;
  opacity: 0.9;
`;

const move1 = keyframes`
  0% {
      transform: translateY(1);
  }

  50% {
      transform: translateY(-20%);
  }

  100% {
      transform: translateY(1);
  }
`;

const move2 = keyframes`
  0% {
    transform: translate(0%, 0%)

      /* transform: translateY(1); */
  }

  50% {
    /* transform: translateX(-20%);
    transform: translateY(10%); */
    transform: translate(0%, 10%)
  }

  100% {
    transform: translate(0%, 0%)

      /* transform: translateY(1); */
  }
`;

export const Ball1 = styled.div<themeType>`
  position: absolute;
  bottom: 10%;
  left: 10%;
  width: 250px;
  height: 250px;
  border-radius: 250px;
  background: linear-gradient(52deg, #9df3ff 9.66%, #fdf0ff 103.24%);
  ${props =>
    props.$theme === 'winter'
      ? css`
          background: linear-gradient(52deg, #9df3ff 9.66%, #fdf0ff 103.24%);
        `
      : css`
          background: radial-gradient(64.31% 64.31% at 64.47% 34.21%, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%);
        `}
  animation: ${move1} 10s -1s linear infinite;
`;

export const Ball2 = styled.div<themeType>`
  position: absolute;
  bottom: 40%;
  right: -1%;
  width: 250px;
  height: 250px;
  border-radius: 250px;
  ${props =>
    props.$theme === 'winter'
      ? css`
          background: linear-gradient(52deg, #f2b7fd 9.66%, #fdf0ff 103.24%);
        `
      : css`
          background: radial-gradient(64.31% 64.31% at 64.47% 34.21%, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%);
        `}
  animation: ${move2} 8s -1s linear infinite;
`;
