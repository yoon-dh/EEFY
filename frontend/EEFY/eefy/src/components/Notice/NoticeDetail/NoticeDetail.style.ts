import styled from 'styled-components';

export const Container = styled.div`
  width: 97%;
  height: 100%;
  /* background-color: white; */
  z-index: 100;
  border-radius: 20px;
  /* box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25); */
`;

export const Wrappe = styled.div`
  width: 100%;
  height: 90%;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// Header
export const Header = styled.div`
  flex: 2;
  margin-top: 5%;
`;
export const Title = styled.div`
  font-size: 30px;
  /* width: 90%; */
  @media (max-width: 1334px) {
    font-size: 20px;
  }
`;

export const Time = styled.div`
  font-size: 18px;
`;

// User
export const UseName = styled.div`
  font-size: 18px;
  /* margin-left: 5px; */
`;
export const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #7b88e0;
`;

export const UpdataBtn = styled.div`
  padding: 8px 12px;
  border: 0;
  text-decoration: none;
  border-radius: 12px;
  /* background-color: rgba(255, 255, 255, 0.1); */
  /* border: 1px solid rgba(255, 255, 255, 0.1); */
  /* backdrop-filter: blur(30px); */
  /* color: rgba(0, 0, 0, 0.8); */
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
`;
export const DeleteBtn = styled.div`
  padding: 8px 0px 8px 12px;
  border: 0;
  text-decoration: none;
  border-radius: 12px;
  /* background-color: rgba(255, 255, 255, 0.1); */
  /* border: 1px solid rgba(255, 255, 255, 0.1); */
  /* backdrop-filter: blur(30px); */
  /* color: rgba(0, 0, 0, 0.8); */
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
`;

// divider
export const Line = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

// Content
export const ContentBox = styled.div`
  flex: 7;
  white-space: pre-line;
  word-wrap: break-word;
`;
export const Content = styled.div``;
