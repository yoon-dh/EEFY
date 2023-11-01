import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
overflow: auto;
padding: 40px 10px 20px 10px;
display: flex;
`
export const Wrappe = styled.div`
flex-wrap: wrap;
align-content: flex-start;
flex: 8;
height: 500px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media(max-width:1340px){
    height: 440px;
  }
`
export const Box = styled.div`
border-radius: 8px;
background-color: #AC98FF;
color: white;
width: 40px;
height: 40px;
margin: 8px 10px 8px 10.5px;
font-size: 12px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover{
  background-color: #8A6DFF;
}
@media(max-width:1340px){
  margin: 5px 10px 5px 15.5px;
  }
`
export const BtnBox = styled.div`
flex:2;
position: relative;
top:10px;
height: 15%;
width: 80%;
margin: 0px auto 0px auto;
display: flex;
`
export const Btn1 = styled.div`
position: relative;
top:50px;
left: 100px;
width: 60%;
height: 30%;
border-radius: 5px;
color: white;
background-color: #AC98FF;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
@media(max-width:1340px){
  top:40px;
  left: 40px;
  font-size: 12px;
}
`
export const Btn2 = styled.div`
position: relative;
top:50px;
left: 60px;
width: 60%;
height: 30%;
border-radius: 5px;
color: white;
background-color: #AC98FF;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
@media(max-width:1340px){
  top:40px;
  left: 30px;
  font-size: 12px;
}
`


