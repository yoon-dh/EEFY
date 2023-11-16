import styled from 'styled-components';

export const Container = styled.div``;
// Title
export const TitleBox = styled.div`
  height: 8%;
  /* flex: 2; */
  display: flex;
  align-items: center;
`;
export const Title = styled.div``;

// Content
export const contentBox = styled.div`
  height: 57%;
  /* flex: 4; */
  display: flex;
  align-items: center;
`;
export const Content = styled.div``;

// Choice
export const Box = styled.div`
  /* flex: 4; */
  height: 35%;
`;
export const ChoiceBox = styled.div`
  display: flex;
  margin: 5px 0px 0px 0px;
  align-items: center;
`;
export const Choice = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0px 5px 0px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// else
export const Answer = styled.input`
  margin: 0px 0px 0px auto;
  height: 50%;
`;
export const ProblemNumber = styled.div`
  margin: 0px 20px 0px 0px;
`;
