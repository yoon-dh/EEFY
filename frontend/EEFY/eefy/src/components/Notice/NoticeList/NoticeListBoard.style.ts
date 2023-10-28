import styled from 'styled-components';

export const Card = styled.div`
  width: 80%;
  height: 75px;
  /* background: #FFFFFF; */
  border: 1px solid rgba(151, 154, 212, 0.6);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin: 15px auto 15px auto;
  &:hover {
    background-color: #f4f4f4;
  }
`;
export const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  margin: 3% 0px 0px 0px;
`;
export const Time = styled.div`
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
