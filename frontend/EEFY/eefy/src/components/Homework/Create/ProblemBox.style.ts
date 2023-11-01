import styled from "styled-components";

export const Container = styled.div`
width: 95%;
height: 100%;
font-size: 18px;
border-radius: 20px;
`
export const Wrappe = styled.div`
`
export const Title = styled.div`
width: 70%;
height: 30%;
position: relative;
top: 30%;
margin: 0px auto 0px auto;
@media(max-width:1340px){
  top: 30%;
}
`
export const TitleInput = styled.input`
border: 2px solid #D6BCFF;
border-radius: 8px;
width: 100%;
outline: none;
padding: 10px;
`
export const ContentBox = styled.div`
width: 70%;
height: 100%;
margin: 0px auto 0px auto;
`
export const Content = styled.textarea`
border: 2px solid #D6BCFF;
border-radius: 8px;
width: 100%;
height: 100%;
outline: none;
white-space: pre-line;
word-wrap: break-word;
padding: 10px;
&::-webkit-scrollbar {
    display: none;
  }
`
export const NumberBox = styled.div`
width: 70%;
height: 80%;
margin: 10px auto 0px auto;
`
export const NumberBtn = styled.div``
export const NumberContent = styled.div``
export const BtnBox = styled.div`
width: 100%;
height: 60%;
display: flex;
@media(max-width:1340px){
}
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
