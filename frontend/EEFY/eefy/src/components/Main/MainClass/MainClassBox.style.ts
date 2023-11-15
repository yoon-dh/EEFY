import styled from 'styled-components';

export const ClassBox = styled.div`
  position: relative;
  width: 185px;
  height: 185px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(131, 129, 129, 0.2);
  border-radius: 20px;

  &:hover {
    background: linear-gradient(225deg, #5667ff 0%, #2396ef 100%);
    color: white;
  }
`;
