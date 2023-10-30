import styled, { css } from 'styled-components';

interface IsActive {
  $isNotActive: boolean;
}

export const StudyCardBox = styled.div<IsActive>`
  position: static;
  width: 160px;
  height: 160px;
  border-radius: 12px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: white;

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

// export const ClassContainer = styled.div`
//   display: grid;
//   gap: 5%;
//   grid-template-columns: repeat(5, 1fr);
//   grid-template-rows: repeat(10, 1fr);
//   grid-template-areas: 'header header header notice-board notice-board' 'header header header notice-board notice-board' 'header header header notice-board notice-board' 'header header header notice-board notice-board' 'header header header notice-board notice-board' 'header header header data-board data-board' 'footer footer footer data-board data-board' 'footer footer footer data-board data-board' 'footer footer footer data-board data-board' 'footer footer footer data-board data-board';
// `;
