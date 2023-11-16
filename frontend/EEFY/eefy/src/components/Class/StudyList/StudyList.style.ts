// 이게 진짜
import styled from 'styled-components';

// ContainerBtn.tsx
export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  @media (max-width: 1340px) {
    font-size: 20px;
  }
`;
export const Tab = styled.div`
  width: 160px;
  height: 50px;
  font-size: 25px;
  @media (max-width: 1340px) {
    width: 120px;
    height: 40px;
    font-size: 20px;
  }
`;
export const SearchInput = styled.input`
  &::placeholder {
    font-weight: bold;
  }
`;
// ---
