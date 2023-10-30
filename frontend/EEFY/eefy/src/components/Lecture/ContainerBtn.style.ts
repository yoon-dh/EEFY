import styled from 'styled-components';

export const CreateBtn = styled.div`
  padding: 5px 20px;
  background: #999bd5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 20px 0px 0px;
  margin-left: auto;
`;
export const NoticeTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  @media (max-width: 1340px) {
    font-size: 20px;
  }
`;
export const Tab = styled.div`
width: 160px;
height: 50px;
font-size: 25px;
@media(max-width:1340px){
  width: 120px;
height: 40px;
font-size: 20px;
}
`