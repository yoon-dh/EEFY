import styled from 'styled-components';

export const Card = styled.div`
  width: 98%;
  height: 100px;
  background: #FAFCFF;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin: 25px auto 25px auto;
  padding: 3px 10px;
  &:hover {
    background-color: #F3F3F3;
  }
  @media(max-width:1334px){
    height: 75px;
  }
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 0px 0px;
  @media(max-width:1340px){
    font-size: 14px;
  }
`;
export const Time = styled.div`
height: 40%;
font-size: 12px;
  text-align: center;
  color: #7b88e0;
  margin: 10px 0px 0px 0px;
`;
export const Container = styled.div``;
export const Wrappe = styled.div`
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
