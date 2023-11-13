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

// LibraryListComponent
export const WorkbookBox = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(131, 129, 129, 0.2);
  border-radius: 20px;

  &:hover {
    background: linear-gradient(225deg, #5667ff 0%, #2396ef 100%);
    color: white;
  }
  @media screen and (min-width: 1400px) {
    width: 250px;
    height: 250px;
  }
`;
// ---

// LibraryItem
export const StyledBookContainer = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  transition: all 0.4s ease-in-out 0s;

  .content-focus {
    opacity: 0;
  }
  .overlay {
    opacity: 0;
  }

  &:hover {
    transition: all 0.4s ease-in-out 0s;
    .bookmark {
      transform: translateX(-50%);
      transition: all 0.4s ease-in-out 0s;
    }
    .bookline {
      opacity: 0;
    }
    .content-focus {
      opacity: 1;
      transition: all 0.4s ease-in-out 300ms;
    }
    .overlay {
      opacity: 0.66;
      transition: all 0.4s ease-in-out 0s;
    }
  }

  @media screen and (min-width: 1400px) {
    width: 250px;
    height: 250px;
  }
`;

export const StyledBookCover = styled.svg`
  width: 220px;
  height: 220px;
  fill: none;
  cursor: pointer;

  @media screen and (min-width: 1400px) {
    width: 270px;
    height: 270px;
  }
`;
// ---
