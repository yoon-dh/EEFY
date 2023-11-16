import styled, { css } from 'styled-components';

interface IsActive {
  $isNotActive: boolean;
}

interface percent {
  $percent: number;
}

export const StudyCardBox = styled.div<IsActive>`
  position: relative;
  width: 200px;
  height: 200px;
  /* border-radius: 12px; */
  /* box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25); */
  /* background-color: white; */
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 20px;

  &:hover {
    background: linear-gradient(225deg, #5667ff 0%, #2396ef 100%);
  }
  @media (max-width: 1340px) {
    width: 150px;
    height: 150px;
    ${({ $isNotActive }) =>
      $isNotActive &&
      css`
        /* display: none; */
        visibility: hidden;
        position: absolute;
      `}
  }
`;

export const RadialProgressBox = styled.div<percent>`
  --value: ${props => props.$percent};
  --size: 4rem;
  color: ${props => {
    if (props.$percent >= 85) {
      return '#4EAA3E';
    } else if (props.$percent >= 40) {
      return 'orange';
    } else {
      return 'red';
    }
  }};
`;
