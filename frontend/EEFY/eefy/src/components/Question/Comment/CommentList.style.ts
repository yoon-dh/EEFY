import styled from "styled-components";

export const Container = styled.form`
height: 520px;
width: 100%;
@media(max-width: 1334px){
  height: 455px;
}
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
  flex: 8;
  padding: 0 0 0 10px; 
  border: none; 
  outline: none; 
  font-size: 15px;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  @media(max-width:1334px){
    font-size: 12px;
    height: 40px;
  }
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
border-top-right-radius: 12px;
border-bottom-right-radius: 12px;
box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
`
export const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

