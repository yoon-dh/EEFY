import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
font-size: 18px;
border-radius: 20px;
`
export const Wrappe = styled.div`
overflow: auto;
&::-webkit-scrollbar {
    display: none;
  }
`
export const Title = styled.div`
width: 70%;
position: relative;
margin: 0px auto 0px auto;
display: flex;
/* top: 30%; */
@media(max-width:1340px){
  /* top: 30%; */
}
`
export const TitleInput = styled.textarea`
border-radius: 8px;
width: 100%;
outline: none;
padding: 10px;
flex: 7;
font-size: 14px;
resize: none;
height: 60%;
word-spacing: 5px;
background-color: rgb(255, 255, 255, 1);
`
export const ContentBox = styled.div`
width: 70%;
height: 100%;
margin: 0px auto 0px auto;
`
export const Content = styled.textarea`
border-radius: 8px;
word-spacing: 5px;
width: 100%;
height: 100%;
outline: none;
resize: none;
white-space: pre-line;
word-wrap: break-word;
padding: 20px;
font-size: 14px;
&::-webkit-scrollbar {
    display: none;
  }
`
export const NumberBox = styled.div`
width: 70%;
height: 100%;
margin: 0px auto 0px auto;
`
export const NumberBtn = styled.div``
export const NumberContent = styled.div``
export const BtnBox = styled.div`
width: 100%;
height: 60%;
display: flex;
`
export const BeforeBtn = styled.img`
width: 20px;
height: 25px;
transform: rotate(180deg);
margin: 0px 0px 0px auto;
cursor: pointer;
`
export const NextBtn = styled.img`
width: 20px;
height: 25px;
margin: 0px 30px 0px 20px;
cursor: pointer;
`
export const IconBox = styled.div`
position: relative;
top: 5%;
margin: 0px 3% 0px auto;
`
export const AnswerBox = styled.div`
width: 100px;
height: 100%;
flex: 2;
outline: none;
`
export const AnswerInput = styled.input`
width: 100%;
padding: 10px;
font-size: 14px;
outline: none;
border-radius: 8px;
`