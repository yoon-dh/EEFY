import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border-left: 1px solid #7b88e0; */
  border-left: 7px solid white;
`;
export const Header = styled.div``;
export const Wrappe = styled.div`
  width: 100%;
  height: 90%;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 2% 0px 0px 0px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Title = styled.div`
  font-size: 30px;
  /* width: 90%; */
`;
export const UseName = styled.div`
  margin: 2px 0px 0px 3%;
  font-size: 17px;
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
font-size: 12px;
padding: 5px 20px;
border-radius: 8px;
background-color: #5AACF8;
color: white;
margin: 0px 20px 0px 0px;
cursor: pointer;
`;
export const DeleteBtn = styled.div`
font-size: 12px;
padding: 5px 20px;
border-radius: 8px;
background-color: #F85A5A;
color: white;
cursor: pointer;
`;
export const BtnBox = styled.div`
width: 100%;
flex: 1;
`
export const ViewerBtn = styled.div`
width: 80%;
padding: 10px 10px;
background: #999BD5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
color: white;
text-align: center;
margin: 50px auto 20px auto;
cursor: pointer;
`
export const DownloadBtn = styled.div`
width: 80%;
padding: 10px 10px;
background: #999BD5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
color: white;
text-align: center;
margin: 0px auto 30px auto;
cursor: pointer;
`

