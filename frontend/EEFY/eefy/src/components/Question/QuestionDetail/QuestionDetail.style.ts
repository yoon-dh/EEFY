import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border-left: 1px solid #7b88e0; */
`;
export const Header = styled.div``;
export const Wrappe = styled.div`
  width: 100%;
  height: 90%;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  /* margin: 2% 0px 0px 0px; */
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Title = styled.div`
  font-size: 25px;
  /* width: 90%; */
  @media(max-width:1334px){
    font-size: 20px;
  }
`;
export const UseName = styled.div`
  margin: 2px 0px 0px 3%;
  font-size: 15px;
  width: 100%;
  /* min-width: 100px; */
`;
export const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #7b88e0;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #7b88e0;
  margin: 2% 0px 3% 0px;
`;
export const Time = styled.div`
  font-size: 12px;
  margin: 5px 0px 0px auto;
`;
export const ContentBox = styled.div`
white-space: pre-line;
word-wrap: break-word;
`;
export const Content = styled.div`
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
