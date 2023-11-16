import { color } from 'framer-motion';
import styled, { css } from 'styled-components';

// 폰트 스타일 정의
const fontStyles = css`
  @font-face {
    font-family: 'HakgyoansimBunpilR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimBunpilR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  font-family: 'HakgyoansimBunpilR', sans-serif;
`;

export const ClassBox = styled.svg`
  position: relative;
  width: 185px;
  height: 185px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(131, 129, 129, 0.2);
  border-radius: 20px;
  opacity: 0.95;

  background: #c36b4f;
`;

export const chalkTag = styled.div`
  /* ${fontStyles} */
  color: #fef9f3;
`;

export const CreateClassBox = styled.div`
  /* ${fontStyles} */
  position: relative;
  width: 185px;
  height: 185px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(131, 129, 129, 0.2);
  border-radius: 20px;

  /* background: rgba(126, 211, 33, 0.25); */
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  /* backdrop-filter: blur(4px); */
  -webkit-backdrop-filter: blur(4px);
  /* border-radius: 10px; */
  /* border: 1px solid rgba(255, 255, 255, 0.18); */

  &:hover {
    background: linear-gradient(225deg, #5667ff 0%, #2396ef 100%);
    color: white;
  }
`;
