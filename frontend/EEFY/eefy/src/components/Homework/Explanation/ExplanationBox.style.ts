import styled from 'styled-components';

export const Container = styled.div`
  height: 550px;
  overflow: auto;
  @media (max-width: 1334px) {
    height: 430px;
  }
`;

export const TitleBox = styled.div`
  /* border: 1px solid yellow; */
  flex: 2;
  display: flex;
  /* margin: 10px; */
  align-items: center;
`;
export const Title = styled.div``;
export const contentBox = styled.div`
  /* border: 1px solid #98d767; */
  flex: 5;
  padding: 10px;
`;
export const Content = styled.div``;
export const ChoiceBox = styled.div`
  /* border: 1px solid black; */
  display: flex;
  margin: 10px;
`;
export const Choice = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  flex: 5;
  /* border: 1px solid #7b88e0; */
`;
export const Answer = styled.input`
  margin: 0px 0px 0px auto;
  height: 50%;
`;
export const ProblemNumber = styled.div`
  margin: 0px 10px 0px 0px;
`;
