import styled, { css } from 'styled-components';

interface IsActive {
  $isActive: boolean;
}

export const ClassBox = styled.div<IsActive>`
  position: relative;
  background-color: rgba(131, 129, 129, 0.2);
  width: 200px;
  height: 200px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(131, 129, 129, 0.2);
  border-radius: 20px;
  ${({ $isActive }) =>
    $isActive &&
    css`
      background: linear-gradient(225deg, #5667ff 0%, #2396ef 100%);
      color: white;
    `}
  &:hover {
    background: linear-gradient(225deg, #5667ff 0%, #2396ef 100%);
    color: white;
  }
`;

export const ClassBoxTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
