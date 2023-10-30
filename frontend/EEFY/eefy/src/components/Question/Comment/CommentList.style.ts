import styled from "styled-components";

export const Container = styled.form`
  &::-webkit-scrollbar {
    display: none;
  }
`
export const Wrappe = styled.form`
display: flex;
`
export const CreateInput = styled.input`
  width: 90%;
  height: 50px;
  flex: 9;
  padding: 0 0 0 10px; 
  border: none; 
  outline: none; 
  font-size: 15px;
  ::placeholder {
    padding: 0;
  }
`;
export const IconBox = styled.div`
flex: 1;
font-size: 25px;
display: flex;
justify-content: center;
align-items: center;
`
export const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
&:hover{
  transition: background-color 0.5s;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #EBEAEA;
}
`