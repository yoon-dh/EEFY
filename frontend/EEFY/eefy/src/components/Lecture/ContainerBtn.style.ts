import styled from 'styled-components';

export const CreateBtn = styled.div`
  background: #999bd5;
  border-radius: 8px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
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