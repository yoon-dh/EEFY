import styled from 'styled-components';

export const Card = styled.div`
  width: 80%;
  height: 75px;
  background: #FAFCFF;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin: 15px auto 15px auto;
  padding: 3px 10px;
  &:hover {
    background-color: #F3F3F3;
  }
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0px 0px 0px;
  @media(max-width:1340px){
    font-size: 14px;
  }
`;
export const Time = styled.div`
font-size: 12px;
  text-align: center;
  color: #7b88e0;
`;
export const Container = styled.div``;
export const Wrappe = styled.div`
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
